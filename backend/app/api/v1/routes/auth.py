from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from app.core.security import create_access_token, decode_access_token
from app.db.session import get_db
from app.schemas.auth import Token
from app.schemas.user import UserCreate, UserRead
from app.services.users import authenticate_user, create_user, get_user_by_email

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/login")


@router.post("/register", response_model=UserRead, status_code=status.HTTP_201_CREATED)
def register(payload: UserCreate, db: Session = Depends(get_db)) -> UserRead:
    if get_user_by_email(db, payload.email):
        raise HTTPException(status_code=409, detail="Email already registered")
    return create_user(db, payload)


@router.post("/login", response_model=Token)
def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db),
) -> Token:
    print("FORM DATA", form_data)
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return Token(
        access_token=create_access_token(subject=user.email), token_type="bearer"
    )


def get_current_user(token: str = Depends(oauth2_scheme)) -> str:
    subject = decode_access_token(token)
    if subject is None:
        raise HTTPException(status_code=401, detail="Invalid token")
    return subject


@router.get("/me")
def me(current_user: str = Depends(get_current_user)) -> dict[str, str]:
    return {"email": current_user}

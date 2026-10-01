from fastapi import APIRouter

from app.api.v1.routes import health
from app.api.v1.routes import auth
from app.api.v1.routes import chat
# from app.api.v1.routes import ingestion

api_router = APIRouter()
api_router.include_router(health.router, tags=["Health"])
api_router.include_router(auth.router, prefix="/auth", tags=["Auth"])
api_router.include_router(chat.router, prefix="/chat", tags=["Chat"])
# api_router.include_router(ingestion.router, prefix="/ingestion", tags=["Ingestion"])

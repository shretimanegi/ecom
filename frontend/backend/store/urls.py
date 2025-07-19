from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, OrderViewSet
from django.contrib import admin
from django.urls import path, include

router = DefaultRouter()
router.register('products', ProductViewSet)
router.register('orders', OrderViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('store.urls')),
]


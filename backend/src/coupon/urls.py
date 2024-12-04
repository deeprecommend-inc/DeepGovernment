from django.urls import path
from .views import coupon_list, coupon_detail

urlpatterns = [
    path('coupons/', coupon_list, name='coupon_list'),
    path('coupons/<int:pk>/', coupon_detail, name='coupon_detail'),
]

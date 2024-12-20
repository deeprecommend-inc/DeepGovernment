from django.urls import path, include
from rest_framework import routers
import content.urls as content_urls
import user.urls as user_urls
import like.urls as like_urls
import coupon.urls as coupon_urls
from deepia_api import views

urlpatterns = [
    path('api/', views.hello_world, name="hello-world"),
    path('api/content/', include(content_urls)),
    path('api/user/', include(user_urls)),
    path('api/like/', include(like_urls)),
    path('api/coupon/', include(coupon_urls)),
    path('api/current_user/', views.current_user, name="current-user"),
    path('api/auth/', views.login, name="login"),
]

from django.db import models
from django.contrib.auth.models import User


class Coupon(models.Model):
    DISCOUNT_TYPE_CHOICES = [
        ('percentage', 'Percentage'),
        ('fixed_amount', 'Fixed Amount'),
        ('free_item', 'Free Item'),
    ]

    is_public = models.BooleanField(default=False)
    merchant = models.ForeignKey(User, on_delete=models.CASCADE, related_name="coupons")
    coupon_code = models.CharField(max_length=50, unique=True)
    image_path = models.CharField(max_length=255, blank=True, null=True)
    is_new_customer = models.BooleanField()
    coupon_title = models.CharField(max_length=100)
    coupon_description = models.TextField()
    contact_info = models.CharField(max_length=100, blank=True, null=True)
    website_urls = models.JSONField(blank=True, null=True)
    start_date = models.DateField()
    end_date = models.DateField()
    now_usage = models.IntegerField(blank=True, null=True)
    usage_limit = models.IntegerField(blank=True, null=True)
    discount_type = models.CharField(max_length=20, choices=DISCOUNT_TYPE_CHOICES)
    discount_value = models.DecimalField(max_digits=10, decimal_places=2)
    minimum_purchase = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class CouponUsage(models.Model):
    coupon = models.ForeignKey(Coupon, on_delete=models.CASCADE, related_name="usages")
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="coupon_usages")
    used_at = models.DateTimeField()
    purchase_amount = models.DecimalField(max_digits=10, decimal_places=2)
    discount_amount = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

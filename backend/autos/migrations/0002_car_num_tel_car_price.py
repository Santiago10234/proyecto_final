# Generated by Django 5.1.1 on 2024-10-01 20:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('autos', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='car',
            name='num_tel',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='car',
            name='price',
            field=models.FloatField(blank=True, null=True),
        ),
    ]

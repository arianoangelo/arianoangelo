# Generated by Django 2.2.6 on 2019-11-17 02:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0010_auto_20191117_0224'),
    ]

    operations = [
        migrations.AlterField(
            model_name='portfolio',
            name='slug',
            field=models.SlugField(unique=True),
        ),
    ]
# Generated by Django 2.2.4 on 2019-11-16 01:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0003_auto_20191116_0112'),
    ]

    operations = [
        migrations.AlterField(
            model_name='portfolio',
            name='date',
            field=models.DateField(verbose_name='Realization Date'),
        ),
    ]

# Generated by Django 3.0.5 on 2020-04-25 15:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0013_auto_20200425_1648'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Images',
            new_name='Image',
        ),
        migrations.RenameModel(
            old_name='Portfolio',
            new_name='Projects',
        ),
    ]
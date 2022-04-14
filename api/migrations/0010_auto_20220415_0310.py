# Generated by Django 3.2 on 2022-04-14 22:10

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_auto_20220415_0242'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='category',
            options={'ordering': ('-created',), 'verbose_name': 'Каталог', 'verbose_name_plural': 'Каталоги'},
        ),
        migrations.AlterModelOptions(
            name='product',
            options={'ordering': ('-created',), 'verbose_name': 'Товар', 'verbose_name_plural': 'Продукты'},
        ),
        migrations.AddField(
            model_name='category',
            name='created',
            field=models.DateField(auto_now_add=True, default=django.utils.timezone.now, verbose_name='Дата создания'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='category',
            name='updated',
            field=models.DateField(auto_now=True, verbose_name='Дата последнего обновления'),
        ),
        migrations.AlterField(
            model_name='product',
            name='updated',
            field=models.DateField(auto_now=True, verbose_name='Дата последнего обновления'),
        ),
    ]

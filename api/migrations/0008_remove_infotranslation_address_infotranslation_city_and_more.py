# Generated by Django 4.0.3 on 2022-03-19 14:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_alter_characteristictranslation_unique_together_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='infotranslation',
            name='address',
        ),
        migrations.AddField(
            model_name='infotranslation',
            name='city',
            field=models.CharField(blank=True, max_length=300, null=True, verbose_name='Город'),
        ),
        migrations.AddField(
            model_name='infotranslation',
            name='country',
            field=models.CharField(blank=True, max_length=300, null=True, verbose_name='Страна'),
        ),
        migrations.AddField(
            model_name='infotranslation',
            name='district',
            field=models.CharField(blank=True, max_length=300, null=True, verbose_name='Район'),
        ),
        migrations.AddField(
            model_name='infotranslation',
            name='street',
            field=models.CharField(blank=True, max_length=300, null=True, verbose_name='Улица с номером адресов'),
        ),
    ]
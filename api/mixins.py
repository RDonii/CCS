class TranslatedSerializerMixin(object):

    #sorting translations using url path variable lang
    def to_representation(self, instance):
        resault = super().to_representation(instance)
        lang = self.context['kwargs']['lang']
        translation = resault.pop('translations')
        if lang in translation:
            translation = translation.pop(lang)
        else:
            translation = list(translation.values())[0]
        resault.update(translation)
        return resault

class TranslatedViewMixin(object):

    #adding lang (url path variable) in order to use in TranslatedSerializerMixin
    def get_serializer_context(self):
        context = super().get_serializer_context()
        kwargs = self.kwargs
        context['kwargs'] = kwargs
        return context
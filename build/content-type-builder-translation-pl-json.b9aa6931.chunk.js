(self["webpackChunkfriseursalon"] = self["webpackChunkfriseursalon"] || []).push([[3948],{

/***/ 49140:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"attribute.boolean":"Typ logiczny","attribute.boolean.description":"Tak lub nie, 1 lub 0, true lub false","attribute.component":"Komponent","attribute.component.description":"Grupa pól, które można powtarzać lub używać ponownie","attribute.date":"Data","attribute.date.description":"Wybór daty z godzinami, minutami i sekundami","attribute.datetime":"Data i godzina","attribute.dynamiczone":"Strefa dynamiczna","attribute.dynamiczone.description":"Dynamicznie wybierz komponent podczas edycji treści","attribute.email":"Email","attribute.email.description":"Pole email ze sprawdzaniem poprawno","attribute.enumeration":"Wyliczenie","attribute.enumeration.description":"Lista wartości do jednokrotnego wyboru","attribute.json":"JSON","attribute.json.description":"Dane w formacie JSON","attribute.media":"Media","attribute.media.description":"Pliki jak obrazki, filmy, itp.","attribute.null":" ","attribute.number":"Numer","attribute.number.description":"Numery (liczba całkowita, liczba zmiennoprzecinkowa, dziesiętna)","attribute.password":"Hasło","attribute.password.description":"Pole hasła z szyfrowaniem","attribute.relation":"Relacja","attribute.relation.description":"Odnośnik do innego modelu","attribute.richtext":"Tekst sformatowany","attribute.richtext.description":"Edytor tekstu z możliwością formatowania","attribute.text":"Tekst","attribute.text.description":"Krótki lub długi tekst jak tytuł lub opis","attribute.time":"Czas","attribute.uid":"UID","attribute.uid.description":"Unikalny identyfikator","button.attributes.add.another":"Dodaj kolejne pole","button.component.add":"Dodaj komponent","button.component.create":"Utwórz komponent","button.model.create":"Utwórz nowy typ zawartości","component.repeatable":"(powtarzalne)","components.componentSelect.no-component-available":"Dodałeś już wszystkie swoje komponenty","components.componentSelect.no-component-available.with-search":"Brak elementów pasujących do Twojego wyszukiwania","components.componentSelect.value-component":"{number} wybrany komponent (wpisz, aby wyszukać komponent)","components.componentSelect.value-components":"{number} wybranych komponentów","configurations":"konfiguracje","contentType.collectionName.description":"Przydatne, gdy nazwa typu zawartości i nazwa tabeli różnią się","contentType.collectionName.label":"Nazwa kolekcji","contentType.displayName.label":"Wyświetlana nazwa","error.contentTypeName.reserved-name":"Ta nazwa nie może być używana w Twoim projekcie, ponieważ może uszkodzić inne funkcje","error.validation.minSupMax":"Nie może być wyższy","form.attribute.component.option.add":"Dodaj komponent","form.attribute.component.option.create":"Utwórz nowy komponent","form.attribute.component.option.create.description":"Komponent jest współużytkowany przez typy i komponenty, będzie dostępny i dostępny wszędzie.","form.attribute.component.option.repeatable":"Powtarzalny komponent","form.attribute.component.option.repeatable.description":"Najlepsze dla wielu wystąpień (tablicy) np. składników, metatagów itp.","form.attribute.component.option.reuse-existing":"Użyj istniejącego komponentu","form.attribute.component.option.reuse-existing.description":"Ponownie użyj utworzonego już komponentu, aby zachować spójność danych między typami treści.","form.attribute.component.option.single":"Pojedynczy komponent","form.attribute.component.option.single.description":"Najlepsze do grupowania pól takich jak pełny adres, główne informacje itp.","form.attribute.item.customColumnName":"Własne nazwy tabel","form.attribute.item.customColumnName.description":"Jest to przydatne do zmiany nazwy tabel bazy danych w bardziej wszechstronnym formacie odpowiedzi API","form.attribute.item.date.type.date":"data","form.attribute.item.date.type.datetime":"data i czas","form.attribute.item.date.type.time":"czas","form.attribute.item.defineRelation.fieldName":"Atrybut","form.attribute.item.enumeration.graphql":"Nadpisanie nazwy dla GraphQL","form.attribute.item.enumeration.graphql.description":"Pozwalaj na nadpisanie domyślnie wygenerowanej nazwy dla GraphQL.","form.attribute.item.enumeration.placeholder":"Przykład:\\nrano\\npołudnie\\nwieczór","form.attribute.item.enumeration.rules":"Values (one line per value)","form.attribute.item.maximum":"Maksymalna wartość","form.attribute.item.maximumLength":"Maksymalna długość","form.attribute.item.minimum":"Minimalna wartość","form.attribute.item.minimumLength":"Minimalna długość","form.attribute.item.number.type":"Forma","form.attribute.item.number.type.biginteger":"duża liczba całkowita (np. 123456789)","form.attribute.item.number.type.decimal":"dziesiętna (np: 2.22)","form.attribute.item.number.type.float":"zmiennoprzecinkowa (np: 3.33333333)","form.attribute.item.number.type.integer":"całkowita (np: 10)","form.attribute.item.privateField":"Pole prywatne","form.attribute.item.privateField.description":"To pole nie pojawi się w odpowiedzi interfejsu API","form.attribute.item.requiredField":"Wymagany","form.attribute.item.requiredField.description":"Nie będziesz w stanie stworzyć wpisu jeżeli atrybut będzie pusty","form.attribute.item.settings.name":"Ustawienia","form.attribute.item.uniqueField":"Unikalny","form.attribute.item.uniqueField.description":"Nie będziesz w stanie stworzyć wpisu jeżeli wartość atrybutu będzie już wykorzystywana","form.attribute.media.option.multiple":"Wiele mediów","form.attribute.media.option.multiple.description":"Najlepsze dla suwaków, karuzeli lub pobierania wielu plików","form.attribute.media.option.single":"Pojedyncze media","form.attribute.media.option.single.description":"Najlepsze dla awatara, zdjęcia profilowego lub okładki","form.attribute.settings.default":"Domyślnie","form.attribute.text.option.long-text":"Długi tekst","form.attribute.text.option.long-text.description":"Najlepsze dla opisów, biografii. \\u2028Dokładne wyszukiwanie jest wyłączone.","form.attribute.text.option.short-text":"Krótki tekst","form.attribute.text.option.short-text.description":"Najlepsze dla tytułów, nazw, linków (URL). Umożliwia także dokładne wyszukiwanie dla pola.","form.button.add-components-to-dynamiczone":"Dodaj komponenty do strefy","form.button.add-field":"Dodaj kolejne pole","form.button.add-first-field-to-created-component":"Dodaj pierwsze pole do komponentu","form.button.add.field.to.component":"Dodaj kolejne pole do tego komponentu","form.button.cancel":"Anuluj","form.button.configure-component":"Skonfiguruj komponent","form.button.configure-view":"Skonfiguruj widok","form.button.continue":"Kontynuuj","form.button.delete":"Usuń","form.button.finish":"Zakończ","form.button.save":"Zapisz","form.button.select-component":"Wybierz komponent","from":"z","menu.section.components.name.plural":"Komponenty","menu.section.components.name.singular":"Komponent","menu.section.models.name.plural":"Modele","menu.section.models.name.singular":"Model","modalForm.attribute.form.base.name":"Nazwa","modalForm.attribute.form.base.name.description":"Spacja nie jest dozwolona dla nazwy atrybutu","modalForm.attribute.text.type-selection":"Typ","modalForm.attributes.select-component":"Wybierz komponent","modalForm.attributes.select-components":"Wybierz komponenty","modalForm.component.header-create":"Utwórz komponent","modalForm.components.create-component.category.label":"Wybierz kategorię lub wprowadź nazwę, aby utworzyć nową","modalForm.components.icon.label":"Ikona","modalForm.editCategory.base.name.description":"Spacja nie jest dozwolona dla nazwy kategorii","modalForm.header-edit":"Edytuj {name}","modalForm.header.categories":"Kategorie","modalForm.sub-header.addComponentToDynamicZone":"Dodaj nowy komponent do strefy dynamicznej","modalForm.sub-header.attribute.create":"Dodaj nowe pole {type}","modalForm.sub-header.attribute.create.step":"Dodaj nowy komponent ({step}/2)","modalForm.sub-header.attribute.edit":"Edytuj {name}","modalForm.sub-header.chooseAttribute.collectionType":"Wybierz pole dla typu zawartości","modalForm.sub-header.chooseAttribute.component":"Wybierz pole dla komponentu","modelPage.attribute.relationWith":"Relacja z","notification.info.creating.notSaved":"Zapisz swoją pracę przed utworzeniem nowego typu treści lub komponentu","plugin.description.long":"Modeluj strukturę danych swojego API. Twórz atrybuty i relacje w minutę. Pliki są automatycznie tworzone i aktualizowane w twoim projekcie.","plugin.description.short":"Modeluj strukturę danych swojego API.","popUpForm.navContainer.advanced":"Zaawansowane","popUpForm.navContainer.base":"Podstawowe","popUpWarning.bodyMessage.cancel-modifications":"Czy na pewno chcesz anulować swoje modyfikacje?","popUpWarning.bodyMessage.cancel-modifications.with-components":"Czy na pewno chcesz anulować swoje modyfikacje? Niektóre komponenty zostały utworzone lub zmodyfikowane ...","popUpWarning.bodyMessage.category.delete":"Czy na pewno chcesz usunąć tę kategorię? Wszystkie komponenty również zostaną usunięte.","popUpWarning.bodyMessage.component.delete":"Czy na pewno chcesz usunąć ten komponent?","popUpWarning.bodyMessage.contentType.delete":"Czy na pewno chcesz usunąć ten model?","prompt.unsaved":"Jesteś pewny, że chcesz wyjść? Wszystkie twoje modyfikacje zostaną utracone.","relation.attributeName.placeholder":"Np: autor, kategoria, tag","relation.manyToMany":"zawiera i należy do wielu","relation.manyToOne":"zawiera wiele","relation.manyWay":"ma wiele","relation.oneToMany":"należy do wielu","relation.oneToOne":"zawiera i należy do","relation.oneWay":"zawiera","table.attributes.title.plural":"pól: {number}","table.attributes.title.singular":"{number} pole"}');

/***/ })

}]);
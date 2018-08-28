export function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

export function getFunName() {
    const nouns = ['женщины', 'мужчины', 'дети', 'зубы', 'ноги', 'люди', 'листья', 'мыши', 'гуси', 'половинки', 'ножи', 'жены', 'жизни', 'эльфы', 'хлебы', 'картофель', 'томаты', 'кактусы', 'фокусы', 'грибы', 'ядра', 'учебные', 'анализы', 'диагнозы', 'оазисы', 'тезисы', 'кризисы', 'явления', 'критерии', 'данные'];
    const adjectives = ['очаровательные', 'красивые', 'чистые', 'серые', 'элегантные', 'причудливые', 'гламурные', 'красивые', 'длинные', 'великолепные', 'старомодные', 'простые', 'странные', 'сверкающие', 'уродливые', 'неприглядные', 'сердитые', 'сбитые с толку', 'неуклюжие', 'побежденные', 'смущенные', 'жестокие', 'сердитые', 'беспомощные', 'зудящие', 'ревнивые', 'ленивые', 'таинственные', 'нервные', 'отвратительные', 'панические', 'отталкивающие', 'страшные', 'бездумные', 'недовольные', 'обеспокоенные'];

    // const adjectives = ['adorable', 'beautiful', 'clean', 'drab', 'elegant', 'fancy', 'glamorous', 'handsome', 'long', 'magnificent', 'old-fashioned', 'plain', 'quaint', 'sparkling', 'ugliest', 'unsightly', 'angry', 'bewildered', 'clumsy', 'defeated', 'embarrassed', 'fierce', 'grumpy', 'helpless', 'itchy', 'jealous', 'lazy', 'mysterious', 'nervous', 'obnoxious', 'panicky', 'repulsive', 'scary', 'thoughtless', 'uptight', 'worried'];
    // const nouns = ['women', 'men', 'children', 'teeth', 'feet', 'people', 'leaves', 'mice', 'geese', 'halves', 'knives', 'wives', 'lives', 'elves', 'loaves', 'potatoes', 'tomatoes', 'cacti', 'foci', 'fungi', 'nuclei', 'syllabuses', 'analyses', 'diagnoses', 'oases', 'theses', 'crises', 'phenomena', 'criteria', 'data'];

  return `${rando(adjectives)}-${rando(nouns)}`;
}

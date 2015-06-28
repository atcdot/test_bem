({
    block: 'page',
    title: 'Мотор Сич',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'meta', attrs: {name: 'viewport', content: 'width=device-width, initial-scale=1'}},
        {elem: 'css', url: 'http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700'},
        {elem: 'css', url: '_index.css'},
        {elem: 'css', url: '../../fonts.css'}

    ],
    scripts: [{elem: 'js', url: '_index.js'}],
    content: [
        {
            block: 'wrapper',
            content: [
                {
                    block: 'header',
                    content: [
                        {
                            block: 'top-nav',
                            content: [
                                {
                                    block: 'logo',
                                    content: [
                                        {
                                            block: 'link',
                                            url: 'http://zakupka.com/',
                                            content: [
                                                {
                                                    block: 'icon',
                                                    url: '../../img/logo.png'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'vip',
                                    content: [
                                        {
                                            block: 'link',
                                            url: 'http://zakupka.com/reklama-site/tariff/',
                                            content: [
                                                {
                                                    elem: 'text',
                                                    content: 'VIP'
                                                },
                                                {
                                                    block: 'icon',
                                                    url: '../../img/stars.png'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'add-company',
                                    content: [
                                        {
                                            block: 'link',
                                            url: 'https://zakupka.com/reg/d6/',
                                            content: [
                                                {
                                                    block: 'icon',
                                                    url: '../../img/checkmark.png'
                                                },
                                                {
                                                    elem: 'text',
                                                    content: 'Добавить компанию на Zakupka.com'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'callback',
                                    content: [
                                        {
                                            block: 'link',
                                            url: '#',
                                            content: [
                                                {
                                                    block: 'icon',
                                                    url: '../../img/phone.png'
                                                },
                                                {
                                                    elem: 'text',
                                                    content: 'Заказать обратный звонок'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'bucket',
                                    content: [
                                        {
                                            block: 'link',
                                            url: '#',
                                            content: [
                                                {
                                                    block: 'icon',
                                                    url: '../../img/bucket.png'
                                                },
                                                {
                                                    elem: 'text',
                                                    content: 'Корзина'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'top-image',
                            content: [
                                {
                                    block: 'firm',
                                    content: [
                                        {
                                            elem: 'logo',
                                            content: [
                                                {
                                                    block: 'image',
                                                    url: '../../img/logo-firm.png',
                                                    alt: 'logo-firm'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'name',
                                            content: 'Мотор Сич'
                                        }
                                    ]
                                },
                                {
                                    block: 'phone',
                                    content: [
                                        {
                                            elem: 'text',
                                            content: '+7 (912) 220-71-85'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'main-menu',
                            content: [
                                {
                                    block: 'menu',
                                    content: [
                                        {
                                            block: 'menu-item',
                                            mods: {type: 'link'},
                                            content: {
                                                block: 'link',
                                                url: '#',
                                                content: [
                                                    {
                                                        elem: 'text',
                                                        tag: 'span',
                                                        content: 'Главная'
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            block: 'menu-item',
                                            mods: {type: 'link'},
                                            content: {
                                                block: 'link',
                                                url: '#',
                                                content: [
                                                    {
                                                        elem: 'text',
                                                        tag: 'span',
                                                        content: 'Товары и услуги'
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            block: 'menu-item',
                                            mods: {type: 'link'},
                                            content: {
                                                block: 'link',
                                                url: '#',
                                                content: [
                                                    {
                                                        elem: 'text',
                                                        tag: 'span',
                                                        content: 'Оплата и доставка'
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            block: 'menu-item',
                                            mods: {type: 'link'},
                                            content: {
                                                block: 'link',
                                                url: '#',
                                                content: [
                                                    {
                                                        elem: 'text',
                                                        tag: 'span',
                                                        content: 'Контакты'
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                },
                                {
                                    block: 'search',
                                    content: [
                                        {
                                            block: 'control-group',
                                            content: [
                                                {
                                                    block: 'icon',
                                                    url: '../../img/search.png'
                                                },
                                                {
                                                    block: 'input',
                                                    mods: {type: 'search'},
                                                    placeholder: 'Поиск товаров'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'breadcrumbs',
                            content: [
                                {
                                    block: 'home',
                                    content: [
                                        {
                                            block: 'link',
                                            url: '#',
                                            content: [
                                                {
                                                    block: 'image',
                                                    url: '../../img/home.png',
                                                    alt: 'home'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'arrow',
                                    content: [
                                        {
                                            block: 'image',
                                            url: '../../img/arrow.png',
                                            alt: 'arrow'
                                        }
                                    ]
                                },
                                {
                                    block: 'level1',
                                    content: [
                                        {
                                            block: 'link',
                                            url: '#',
                                            content: [
                                                {
                                                    elem: 'text',
                                                    tag: 'span',
                                                    content: 'Товары и услуги'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'arrow',
                                    content: [
                                        {
                                            block: 'image',
                                            url: '../../img/arrow.png',
                                            alt: 'arrow'
                                        }
                                    ]
                                },
                                {
                                    block: 'level2',
                                    content: [
                                        {
                                            block: 'link',
                                            url: '#',
                                            content: [
                                                {
                                                    elem: 'text',
                                                    tag: 'span',
                                                    content: 'Ручная дуговая'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'arrow',
                                    content: [
                                        {
                                            block: 'image',
                                            url: '../../img/arrow.png',
                                            alt: 'arrow'
                                        }
                                    ]
                                },
                                {
                                    block: 'this-level',
                                    content: [
                                        {
                                            elem: 'text',
                                            tag: 'span',
                                            content: 'Инверторы'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'sidebar',
                    content: [
                        {
                            elem: 'content',
                            content: [
                                {
                                    block: 'products',
                                    content: [
                                        {
                                            elem: 'head',
                                            content: [
                                                {
                                                    block: 'icon',
                                                    url: '../../img/hanger.png'
                                                },
                                                {
                                                    elem: 'text',
                                                    content: 'Товары и услуги (203)'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'category',
                                            tag: 'ul',
                                            content: [
                                                {
                                                    elem: 'item',
                                                    tag: 'li',
                                                    mods: { opened: true},
                                                    content: [
                                                        {
                                                            elem: 'name',
                                                            tag: 'span',
                                                            content: [
                                                                {
                                                                    block: 'link',
                                                                    url: '#',
                                                                    content: 'Фонари (169)'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'sub-category',
                                                            tag: 'ul',
                                                            content: [
                                                                {
                                                                    elem: 'item',
                                                                    tag: 'li',
                                                                    content: [
                                                                        {
                                                                            block: 'link',
                                                                            url: '#',
                                                                            content: 'Бинокулярная лупа'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    tag: 'li',
                                                                    content: [
                                                                        {
                                                                            block: 'link',
                                                                            url: '#',
                                                                            content: 'Лампа-лупа ZD-129A'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    tag: 'li',
                                                                    content: [
                                                                        {
                                                                            block: 'link',
                                                                            url: '#',
                                                                            content: 'Круглогубцы 4,5IN загнутые'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'item',
                                                    tag: 'li',
                                                    content: [
                                                        {
                                                            elem: 'name',
                                                            tag: 'span',
                                                            content: [
                                                                {
                                                                    block: 'link',
                                                                    url: '#',
                                                                    content: 'Детектор валюты&nbsp;(3)'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'sub-category',
                                                            tag: 'ul',
                                                            content: [
                                                                {

                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'item',
                                                    tag: 'li',
                                                    content: [
                                                        {
                                                            elem: 'name',
                                                            tag: 'span',
                                                            content: [
                                                                {
                                                                    block: 'link',
                                                                    url: '#',
                                                                    content: 'Зарядные устройства&nbsp;(6)'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'sub-category',
                                                            tag: 'ul',
                                                            content: [
                                                                {

                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'item',
                                                    tag: 'li',
                                                    content: [
                                                        {
                                                            elem: 'name',
                                                            tag: 'span',
                                                            content: [
                                                                {
                                                                    block: 'link',
                                                                    url: '#',
                                                                    content: 'Лазерные указки&nbsp;(3)'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'sub-category',
                                                            tag: 'ul',
                                                            content: [
                                                                {

                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'item',
                                                    tag: 'li',
                                                    mods: { 'no-child': true},
                                                    content: [
                                                        {
                                                            elem: 'name',
                                                            tag: 'span',
                                                            content: [
                                                                {
                                                                    block: 'link',
                                                                    url: '#',
                                                                    content: 'Крепления для фонарей&nbsp;(2)'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'item',
                                                    tag: 'li',
                                                    content: [
                                                        {
                                                            elem: 'name',
                                                            tag: 'span',
                                                            content: [
                                                                {
                                                                    block: 'link',
                                                                    url: '#',
                                                                    content: 'Li-ionаккумуляторы к фонарям&nbsp;(12)'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'sub-category',
                                                            tag: 'ul',
                                                            content: [
                                                                {

                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'item',
                                                    tag: 'li',
                                                    content: [
                                                        {
                                                            elem: 'name',
                                                            tag: 'span',
                                                            content: [
                                                                {
                                                                    block: 'link',
                                                                    url: '#',
                                                                    content: 'Скотч&nbsp;(3)'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'sub-category',
                                                            tag: 'ul',
                                                            content: [
                                                                {

                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'side-menu',
                                    content: [
                                        {
                                            elem: 'item',
                                            content: [
                                                {
                                                    block: 'link',
                                                    url: '#',
                                                    content: 'О нас'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            content: [
                                                {
                                                    block: 'link',
                                                    url: '#',
                                                    content: 'Оставить отзыв'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            content: [
                                                {
                                                    block: 'link',
                                                    url: '#',
                                                    content: 'Новости'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            content: [
                                                {
                                                    block: 'link',
                                                    url: '#',
                                                    content: 'Статьи'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'content',
                },
                {
                    block: 'footer',
                }
            ]
        }
    ]
})
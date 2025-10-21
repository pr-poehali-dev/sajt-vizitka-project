import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const products = [
    {
      id: 1,
      name: 'Свежие овощи',
      description: 'Собраны сегодня утром с наших полей',
      price: 'от 150₽/кг',
      image: 'https://cdn.poehali.dev/projects/065259f2-d3f3-4f54-8cce-e3b13cc5f3e6/files/e1508d93-848a-4e38-9b9b-feac83b9b9a2.jpg'
    },
    {
      id: 2,
      name: 'Молочная продукция',
      description: 'Натуральное молоко и сыры от местных ферм',
      price: 'от 200₽',
      image: 'https://cdn.poehali.dev/projects/065259f2-d3f3-4f54-8cce-e3b13cc5f3e6/files/7127c321-f762-4a33-b77c-29f2ab56e536.jpg'
    },
    {
      id: 3,
      name: 'Сезонные фрукты',
      description: 'Спелые фрукты с садов наших партнеров',
      price: 'от 180₽/кг',
      image: 'https://cdn.poehali.dev/projects/065259f2-d3f3-4f54-8cce-e3b13cc5f3e6/files/e1508d93-848a-4e38-9b9b-feac83b9b9a2.jpg'
    }
  ];

  const farmers = [
    {
      name: 'Иван Петров',
      role: 'Фермер-овощевод',
      description: 'Выращиваю органические овощи уже 15 лет. Для меня важно качество каждого продукта.',
      image: 'https://cdn.poehali.dev/projects/065259f2-d3f3-4f54-8cce-e3b13cc5f3e6/files/3a2f99f9-fcbc-4b72-b86c-3a316c16a6f7.jpg'
    },
    {
      name: 'Мария Соколова',
      role: 'Владелица молочной фермы',
      description: 'Наша семейная ферма производит натуральную молочную продукцию с 1995 года.',
      image: 'https://cdn.poehali.dev/projects/065259f2-d3f3-4f54-8cce-e3b13cc5f3e6/files/3a2f99f9-fcbc-4b72-b86c-3a316c16a6f7.jpg'
    }
  ];

  const reviews = [
    {
      name: 'Анна Михайлова',
      text: 'Заказываю продукты уже полгода. Всегда свежие, вкусные, как с бабушкиной дачи!',
      rating: 5
    },
    {
      name: 'Дмитрий Волков',
      text: 'Отличное качество и быстрая доставка. Рекомендую всем, кто ценит натуральные продукты.',
      rating: 5
    },
    {
      name: 'Елена Смирнова',
      text: 'Наконец-то нашла место, где можно купить действительно свежие овощи. Спасибо!',
      rating: 5
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Sprout" size={28} className="text-primary" />
              <span className="text-2xl font-bold text-primary">ФермаДома</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#products" className="text-foreground hover:text-primary transition-colors">Продукция</a>
              <a href="#farmers" className="text-foreground hover:text-primary transition-colors">О фермерах</a>
              <a href="#delivery" className="text-foreground hover:text-primary transition-colors">Доставка</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:block">Заказать</Button>
            <Icon name="Menu" size={24} className="md:hidden text-foreground" />
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Свежие продукты от местных фермеров
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Натуральные овощи, фрукты и молочные продукты с доставкой прямо к вашему дому
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Заказать сейчас
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/065259f2-d3f3-4f54-8cce-e3b13cc5f3e6/files/e1508d93-848a-4e38-9b9b-feac83b9b9a2.jpg"
                alt="Свежие продукты"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Наша продукция</h2>
            <p className="text-xl text-muted-foreground">Только свежее, только качественное</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold text-primary">{product.price}</span>
                    <Button size="sm">
                      <Icon name="Plus" size={16} className="mr-1" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="farmers" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Наши фермеры</h2>
            <p className="text-xl text-muted-foreground">Люди, которые заботятся о качестве</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {farmers.map((farmer, index) => (
              <Card key={index} className="overflow-hidden animate-fade-in">
                <div className="grid md:grid-cols-2">
                  <img 
                    src={farmer.image} 
                    alt={farmer.name}
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                  <CardContent className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{farmer.name}</h3>
                    <p className="text-primary font-semibold mb-4">{farmer.role}</p>
                    <p className="text-muted-foreground">{farmer.description}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Доставка</h2>
            <p className="text-xl text-muted-foreground">Быстро и бережно</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Clock" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">В день заказа</h3>
              <p className="text-muted-foreground">Доставляем свежие продукты в течение 24 часов</p>
            </Card>
            <Card className="text-center p-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Truck" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Бесплатная доставка</h3>
              <p className="text-muted-foreground">При заказе от 2000₽ доставка бесплатно</p>
            </Card>
            <Card className="text-center p-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Package" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Эко-упаковка</h3>
              <p className="text-muted-foreground">Используем только экологичные материалы</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="p-8 animate-fade-in">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                <p className="font-semibold text-foreground">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">Ответим на все ваши вопросы</p>
          </div>
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Ваше имя</label>
                <Input 
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input 
                  type="email"
                  placeholder="ivan@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите, чем мы можем вам помочь..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить сообщение
              </Button>
            </form>
          </Card>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <Icon name="Phone" size={24} className="mx-auto mb-2 text-primary" />
              <p className="text-muted-foreground">+7 (999) 123-45-67</p>
            </div>
            <div className="text-center">
              <Icon name="Mail" size={24} className="mx-auto mb-2 text-primary" />
              <p className="text-muted-foreground">info@fermadoma.ru</p>
            </div>
            <div className="text-center">
              <Icon name="MapPin" size={24} className="mx-auto mb-2 text-primary" />
              <p className="text-muted-foreground">Московская обл.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sprout" size={24} />
                <span className="text-xl font-bold">ФермаДома</span>
              </div>
              <p className="text-primary-foreground/80">Свежие продукты от местных фермеров с доставкой</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2">
                <li><a href="#products" className="text-primary-foreground/80 hover:text-primary-foreground">Продукция</a></li>
                <li><a href="#farmers" className="text-primary-foreground/80 hover:text-primary-foreground">О фермерах</a></li>
                <li><a href="#delivery" className="text-primary-foreground/80 hover:text-primary-foreground">Доставка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>+7 (999) 123-45-67</li>
                <li>info@fermadoma.ru</li>
                <li>Московская область</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <Icon name="Instagram" size={24} className="cursor-pointer hover:opacity-80" />
                <Icon name="Facebook" size={24} className="cursor-pointer hover:opacity-80" />
                <Icon name="MessageCircle" size={24} className="cursor-pointer hover:opacity-80" />
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>© 2024 ФермаДома. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

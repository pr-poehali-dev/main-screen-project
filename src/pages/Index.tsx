import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">Арбитраж Омск</div>
            <div className="hidden md:flex gap-8 items-center">
              <button onClick={() => scrollToSection('advantages')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Преимущества</button>
              <button onClick={() => scrollToSection('process')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Процесс</button>
              <button onClick={() => scrollToSection('cases')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Кейсы</button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Тарифы</button>
              <button onClick={() => scrollToSection('faq')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Вопросы</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('contact')} size="sm">Консультация</Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Защитим ваши интересы<br />в арбитражном суде
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              Специализируемся на арбитражных спорах в Омской области. Полное сопровождение от документов до решения суда.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <div className="text-5xl font-bold text-primary">от 15 000 ₽</div>
              <div className="text-lg text-muted-foreground">фиксированная стоимость</div>
            </div>
            <Button onClick={() => scrollToSection('contact')} size="lg" className="text-lg px-8 py-6 mt-4">
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Почему именно мы</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'Scale', title: 'Региональная экспертиза', desc: 'Знаем судебную практику Омской области' },
              { icon: 'FileCheck', title: 'Под ключ', desc: 'От подготовки документов до судебного заседания' },
              { icon: 'TrendingUp', title: '500+ выигранных дел', desc: 'Успешный опыт в арбитражных спорах' },
              { icon: 'Banknote', title: 'Прозрачность', desc: 'Фиксированная стоимость без скрытых платежей' }
            ].map((item, idx) => (
              <Card key={idx} className="border-none shadow-none bg-white">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={item.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Как мы работаем</h2>
          <div className="space-y-8">
            {[
              { step: '01', title: 'Заявка', desc: 'Оставьте заявку на консультацию удобным способом' },
              { step: '02', title: 'Анализ дела', desc: 'Изучаем документы и оцениваем перспективы' },
              { step: '03', title: 'Договор', desc: 'Фиксируем стоимость и условия сопровождения' },
              { step: '04', title: 'Подготовка', desc: 'Собираем доказательства и готовим документы' },
              { step: '05', title: 'Суд', desc: 'Представляем ваши интересы на заседаниях' },
              { step: '06', title: 'Результат', desc: 'Получаем решение и консультируем по дальнейшим действиям' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-8 items-start group">
                <div className="text-6xl font-bold text-muted/20 group-hover:text-primary/30 transition-colors">{item.step}</div>
                <div className="flex-1 pt-3">
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-lg text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Наши кейсы</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Взыскание задолженности', result: 'Взыскано 2 500 000 ₽', period: '4 месяца' },
              { title: 'Признание сделки недействительной', result: 'Иск удовлетворен полностью', period: '6 месяцев' },
              { title: 'Отказ в исковых требованиях', result: 'Защита ответчика', period: '3 месяца' }
            ].map((item, idx) => (
              <Card key={idx} className="border-none shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Trophy" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="font-semibold text-primary">{item.result}</p>
                  <p className="text-sm text-muted-foreground">Срок: {item.period}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Тарифы</h2>
          <p className="text-center text-muted-foreground text-lg mb-16">Фиксированная стоимость без скрытых платежей</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Базовый',
                price: '15 000',
                features: ['Консультация юриста', 'Анализ документов', 'Подготовка позиции', 'Участие в 1 заседании']
              },
              {
                name: 'Стандарт',
                price: '30 000',
                features: ['Все из Базового', 'Подготовка всех документов', 'Участие во всех заседаниях', 'Сопровождение до решения суда'],
                popular: true
              },
              {
                name: 'Премиум',
                price: '50 000',
                features: ['Все из Стандарта', 'Апелляционная инстанция', 'Исполнительное производство', 'Приоритетная поддержка']
              }
            ].map((plan, idx) => (
              <Card key={idx} className={`relative ${plan.popular ? 'border-primary shadow-2xl scale-105' : 'border-border'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-4">{plan.name}</CardTitle>
                  <div className="space-y-1">
                    <div className="text-5xl font-bold">от {plan.price} ₽</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => scrollToSection('contact')} 
                    className="w-full" 
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Вопросы и ответы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Сколько времени длится арбитражный процесс?',
                a: 'В среднем 3-6 месяцев от подачи иска до решения суда первой инстанции. Срок зависит от сложности дела и загруженности суда.'
              },
              {
                q: 'Можно ли вернуть госпошлину?',
                a: 'Да, если суд удовлетворит ваши требования, расходы на госпошлину взыскиваются с проигравшей стороны.'
              },
              {
                q: 'Что, если дело проиграно?',
                a: 'Можно подать апелляцию в течение месяца. Мы анализируем перспективы обжалования и сопровождаем в апелляционной инстанции.'
              },
              {
                q: 'Нужно ли моё присутствие на заседаниях?',
                a: 'Не обязательно. Мы представляем ваши интересы по доверенности и информируем вас о ходе процесса.'
              },
              {
                q: 'Какие документы нужны для начала работы?',
                a: 'Договоры, переписка, платёжные документы и другие материалы по спору. Составим полный список после консультации.'
              }
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="team" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Наша команда</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: 'Иванов Сергей', role: 'Старший юрист', exp: '12 лет в арбитражном процессе' },
              { name: 'Петрова Анна', role: 'Юрист', exp: '8 лет, специализация — взыскание задолженности' },
              { name: 'Сидоров Михаил', role: 'Юрист', exp: '10 лет, корпоративные споры' }
            ].map((member, idx) => (
              <div key={idx} className="text-center space-y-4">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mx-auto flex items-center justify-center">
                  <Icon name="User" size={48} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                  <p className="text-sm text-muted-foreground mt-2">{member.exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-secondary text-secondary-foreground">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Получить консультацию</h2>
            <p className="text-lg opacity-90">Оставьте заявку, и мы свяжемся с вами в течение часа</p>
          </div>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Телефон"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Кратко опишите суть вопроса"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-12 text-center space-y-4">
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={20} />
                <span>+7 (3812) 00-00-00</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={20} />
                <span>info@arbitrage-omsk.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={20} />
                <span>г. Омск, ул. Ленина, 1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Арбитраж Омск. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

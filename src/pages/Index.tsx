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
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-primary/20 z-50">
        <div className="container mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-secondary tracking-tight">Арбитраж Омск</div>
            <div className="hidden md:flex gap-10 items-center font-sans">
              <button onClick={() => scrollToSection('advantages')} className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 tracking-wide">Преимущества</button>
              <button onClick={() => scrollToSection('process')} className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 tracking-wide">Процесс</button>
              <button onClick={() => scrollToSection('cases')} className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 tracking-wide">Кейсы</button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 tracking-wide">Тарифы</button>
              <button onClick={() => scrollToSection('faq')} className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 tracking-wide">Вопросы</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 tracking-wide">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('contact')} size="sm" className="font-sans tracking-wide">Консультация</Button>
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto max-w-5xl relative">
          <div className="text-center space-y-10 animate-fade-in">
            <div className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-sm font-sans tracking-widest text-primary uppercase">Премиальные юридические услуги</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.1]">
              Защитим ваши интересы<br />в арбитражном суде
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Специализируемся на арбитражных спорах в Омской области. Полное сопровождение от документов до решения суда.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
              <div className="relative">
                <div className="text-6xl font-bold text-primary tracking-tight">от 15 000 ₽</div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full" />
              </div>
              <div className="text-lg text-muted-foreground font-sans">фиксированная стоимость</div>
            </div>
            <Button onClick={() => scrollToSection('contact')} size="lg" className="text-lg px-12 py-7 mt-6 font-sans tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300">
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-32 px-6 bg-gradient-to-b from-white to-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">Почему именно мы</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: 'Scale', title: 'Региональная экспертиза', desc: 'Знаем судебную практику Омской области' },
              { icon: 'FileCheck', title: 'Под ключ', desc: 'От подготовки документов до судебного заседания' },
              { icon: 'TrendingUp', title: '500+ выигранных дел', desc: 'Успешный опыт в арбитражных спорах' },
              { icon: 'Banknote', title: 'Прозрачность', desc: 'Фиксированная стоимость без скрытых платежей' }
            ].map((item, idx) => (
              <div key={idx} className="group">
                <Card className="border border-primary/20 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-500 bg-white h-full">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon name={item.icon} className="text-primary" size={32} />
                    </div>
                    <CardTitle className="text-2xl mb-3">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">Как мы работаем</h2>
          <div className="space-y-12">
            {[
              { step: '01', title: 'Заявка', desc: 'Оставьте заявку на консультацию удобным способом' },
              { step: '02', title: 'Анализ дела', desc: 'Изучаем документы и оцениваем перспективы' },
              { step: '03', title: 'Договор', desc: 'Фиксируем стоимость и условия сопровождения' },
              { step: '04', title: 'Подготовка', desc: 'Собираем доказательства и готовим документы' },
              { step: '05', title: 'Суд', desc: 'Представляем ваши интересы на заседаниях' },
              { step: '06', title: 'Результат', desc: 'Получаем решение и консультируем по дальнейшим действиям' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-12 items-start group relative">
                <div className="relative">
                  <div className="text-7xl font-bold text-primary/10 group-hover:text-primary/30 transition-all duration-500">{item.step}</div>
                  {idx < 5 && <div className="absolute left-1/2 top-full w-0.5 h-12 bg-gradient-to-b from-primary/20 to-transparent" />}
                </div>
                <div className="flex-1 pt-4 pb-4">
                  <h3 className="text-3xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-32 px-6 bg-gradient-to-b from-muted/20 to-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">Наши кейсы</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: 'Взыскание задолженности', result: 'Взыскано 2 500 000 ₽', period: '4 месяца' },
              { title: 'Признание сделки недействительной', result: 'Иск удовлетворен полностью', period: '6 месяцев' },
              { title: 'Отказ в исковых требованиях', result: 'Защита ответчика', period: '3 месяца' }
            ].map((item, idx) => (
              <Card key={idx} className="border border-primary/20 shadow-lg hover:shadow-2xl transition-all duration-500 group bg-white">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Trophy" className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-2xl leading-tight">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-xl font-semibold text-primary">{item.result}</p>
                  <p className="text-muted-foreground font-sans">Срок: {item.period}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-6">Тарифы</h2>
          <p className="text-center text-muted-foreground text-xl mb-20">Фиксированная стоимость без скрытых платежей</p>
          <div className="grid md:grid-cols-3 gap-10">
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
              <Card key={idx} className={`relative transition-all duration-500 ${plan.popular ? 'border-2 border-primary shadow-2xl scale-105 bg-gradient-to-b from-white to-primary/5' : 'border border-primary/20 hover:border-primary/40 hover:shadow-xl bg-white'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-sans font-semibold tracking-wide shadow-lg">
                    Популярный
                  </div>
                )}
                <CardHeader className="text-center pb-10 pt-8">
                  <CardTitle className="text-3xl mb-6">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-6xl font-bold text-primary">от {plan.price} ₽</div>
                  </div>
                </CardHeader>
                <CardContent className="px-8">
                  <ul className="space-y-5 mb-10">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-4">
                        <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={22} />
                        <span className="text-lg leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => scrollToSection('contact')} 
                    className="w-full py-6 text-lg font-sans tracking-wide" 
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

      <section id="faq" className="py-32 px-6 bg-gradient-to-b from-white to-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">Вопросы и ответы</h2>
          <Accordion type="single" collapsible className="space-y-6">
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
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border border-primary/20 rounded-lg px-8 py-2 hover:border-primary/40 transition-colors duration-300">
                <AccordionTrigger className="text-left text-xl font-semibold hover:no-underline py-6 hover:text-primary transition-colors">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-6 text-lg leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="team" className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">Наша команда</h2>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { name: 'Иванов Сергей', role: 'Старший юрист', exp: '12 лет в арбитражном процессе' },
              { name: 'Петрова Анна', role: 'Юрист', exp: '8 лет, специализация — взыскание задолженности' },
              { name: 'Сидоров Михаил', role: 'Юрист', exp: '10 лет, корпоративные споры' }
            ].map((member, idx) => (
              <div key={idx} className="text-center space-y-6 group">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 mx-auto flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border-2 border-primary/20">
                  <Icon name="User" size={56} className="text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold">{member.name}</h3>
                  <p className="text-primary font-sans tracking-wide">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{member.exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary/20" />
        <div className="container mx-auto max-w-4xl relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Получить консультацию</h2>
            <p className="text-xl opacity-90 leading-relaxed">Оставьте заявку, и мы свяжемся с вами в течение часа</p>
          </div>
          <Card className="max-w-2xl mx-auto shadow-2xl border-primary/30">
            <CardContent className="pt-10 pb-10 px-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-14 text-lg"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Телефон"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-14 text-lg"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Кратко опишите суть вопроса"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="text-lg"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full py-7 text-lg font-sans tracking-wide shadow-xl">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-16 text-center space-y-6">
            <div className="flex flex-wrap justify-center gap-12 font-sans">
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={24} />
                <span className="text-lg">+7 (3812) 00-00-00</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" size={24} />
                <span className="text-lg">info@arbitrage-omsk.ru</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="MapPin" size={24} />
                <span className="text-lg">г. Омск, ул. Ленина, 1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-primary/20 bg-gradient-to-b from-white to-muted/20">
        <div className="container mx-auto text-center font-sans">
          <p className="text-muted-foreground">© 2024 Арбитраж Омск. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
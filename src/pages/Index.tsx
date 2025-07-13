import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [showTechInfo, setShowTechInfo] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Shield" className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-gray-900">D2 Security</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Услуги
            </a>
            <a
              href="#team"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Команда
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Контакты
            </a>
            <Dialog open={showTechInfo} onOpenChange={setShowTechInfo}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <Icon name="Info" className="h-4 w-4 mr-2" />
                  Tech Info
                </Button>
              </DialogTrigger>
            </Dialog>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <Badge variant="outline" className="mb-6 px-4 py-2">
            <Icon name="Shield" className="h-4 w-4 mr-2" />
            Профессиональная кибербезопасность
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Комплексное
            <span className="text-primary block">
              тестирование безопасности
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Защитим ваш бизнес от киберугроз с помощью профессионального
            пентестинга по методологиям Black Box, Gray Box и White Box
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              <Icon name="Mail" className="h-4 w-4 mr-2" />
              Получить консультацию
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              <Icon name="Play" className="h-4 w-4 mr-2" />
              Смотреть демо
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наши методологии тестирования
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Используем передовые подходы для выявления уязвимостей и защиты
              вашей инфраструктуры
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Black Box */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gray-900 rounded-lg">
                    <Icon name="Eye" className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="ml-auto">
                    Black Box
                  </Badge>
                </div>
                <CardTitle className="text-xl">
                  Тестирование "черного ящика"
                </CardTitle>
                <CardDescription>
                  Имитация реальной атаки без предварительной информации о
                  системе
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Внешний анализ периметра
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Поиск открытых портов и сервисов
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Социальная инженерия
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Gray Box */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border-primary">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary rounded-lg">
                    <Icon name="Search" className="h-6 w-6 text-white" />
                  </div>
                  <Badge className="ml-auto">Gray Box</Badge>
                </div>
                <CardTitle className="text-xl">
                  Тестирование "серого ящика"
                </CardTitle>
                <CardDescription>
                  Комбинированный подход с частичной информацией о системе
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Анализ архитектуры приложений
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Тестирование API и интеграций
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Проверка бизнес-логики
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* White Box */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <Icon name="Code" className="h-6 w-6 text-gray-700" />
                  </div>
                  <Badge variant="outline" className="ml-auto">
                    White Box
                  </Badge>
                </div>
                <CardTitle className="text-xl">
                  Тестирование "белого ящика"
                </CardTitle>
                <CardDescription>
                  Полный анализ с доступом к исходному коду и документации
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Аудит исходного кода
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Анализ конфигураций
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Статический анализ безопасности
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наша команда
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Эксперты в области информационной безопасности с многолетним
              опытом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3].map((member) => (
              <Card key={member} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Специалист {member}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Senior Penetration Tester
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary" className="text-xs">
                      CISSP
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      CEH
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      OSCP
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Свяжитесь с нами
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Готовы обсудить ваши потребности в области кибербезопасности
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  Контактная информация
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="Mail" className="h-5 w-5 text-primary mr-3" />
                    <span>info@d2security.ru</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Phone" className="h-5 w-5 text-primary mr-3" />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="MapPin" className="h-5 w-5 text-primary mr-3" />
                    <span>Москва, ул. Кибербезопасности, 1</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Clock" className="h-5 w-5 text-primary mr-3" />
                    <span>Пн-Пт: 9:00-18:00</span>
                  </div>
                </div>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Получить консультацию</CardTitle>
                    <CardDescription>
                      Оставьте заявку и мы свяжемся с вами в течение часа
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Ваше имя</label>
                      <input
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Введите имя"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <input
                        type="email"
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="example@company.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Тип услуги</label>
                      <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
                        <option>Black Box тестирование</option>
                        <option>Gray Box тестирование</option>
                        <option>White Box тестирование</option>
                        <option>Комплексный аудит</option>
                      </select>
                    </div>
                    <Button className="w-full">
                      <Icon name="Send" className="h-4 w-4 mr-2" />
                      Отправить заявку
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Shield" className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">D2 Security</span>
              </div>
              <p className="text-gray-400 text-sm">
                Профессиональные услуги по тестированию на проникновение и
                аудиту информационной безопасности.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Black Box тестирование</li>
                <li>Gray Box тестирование</li>
                <li>White Box тестирование</li>
                <li>Аудит безопасности</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>О нас</li>
                <li>Команда</li>
                <li>Карьера</li>
                <li>Контакты</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Ресурсы</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Блог</li>
                <li>Документация</li>
                <li>Сертификаты</li>
                <li>Поддержка</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 D2 Security. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Tech Info Dialog */}
      <Dialog open={showTechInfo} onOpenChange={setShowTechInfo}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Icon name="Settings" className="h-5 w-5 mr-2" />
              Техническая информация о платформе
            </DialogTitle>
            <DialogDescription>
              Ответы на ваши вопросы о том, как работает наша платформа
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">🏗️ Стек технологий</h4>
              <p className="text-gray-600 mb-2">
                Все приложения создаются на современном стеке: React +
                TypeScript + Vite + Tailwind CSS. Код собирается прямо в
                браузере с использованием облачной инфраструктуры.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Vite</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">
                🤖 Как работает ассистент
              </h4>
              <p className="text-gray-600">
                Я — Юра, ИИ-ассистент платформы Поехали! Анализирую ваши
                запросы, изучаю существующие файлы проекта и генерирую
                качественный код. Имею доступ к инструментам чтения,
                редактирования файлов и управления проектом.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">
                💡 Управление ресурсами
              </h4>
              <p className="text-gray-600">
                Система управления токенами и энергией реализована независимо от
                меня. Я сосредоточен исключительно на создании качественного
                кода по вашим запросам.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">📁 Доступ к коду</h4>
              <p className="text-gray-600">
                Чтобы получить полный доступ к исходному коду или экспорт в
                другие форматы, подключите GitHub через раздел "Скачать" в
                редакторе. Это откроет все файлы проекта.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Icon name="Info" className="h-4 w-4 text-blue-600 mr-2" />
                <span className="text-blue-800 font-medium">Подробнее</span>
              </div>
              <p className="text-blue-700 text-sm">
                Документация: docs.poehali.dev • Сообщество:
                t.me/+QgiLIa1gFRY4Y2Iy
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;

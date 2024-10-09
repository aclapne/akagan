export const Tab_Content = [
  {
    id: 0,
    name: 'Components',
    description:
      'React Components, kullanıcı arayüzünü (UI) oluşturan, birbirinden bağımsız ve tekrar kullanılabilir parçalardır.\n' +
      'Her bir bileşen kendi yapı taşına sahiptir ve görsel çıktısını belirlemek için props ve state kullanır.\n' +
      'Bileşenler, uygulamanın farklı kısımlarını izole etmek ve yönetmek için kullanıldığından, uygulama geliştirmeyi daha modüler ve yönetilebilir hale getirir.',
  },
  {
    id: 1,
    name: 'JSX',
    description:
      "JSX (JavaScript XML), React'te kullanıcı arayüzlerini tanımlamak için kullanılan, HTML benzeri bir sözdizimidir.\n" +
      "JavaScript'e XML benzeri bir yapı ekleyerek, bileşenlerin içeriğini tanımlamayı ve HTML etiketleriyle JavaScript ifadelerini birlikte kullanmayı sağlar.\n" +
      "JSX, JavaScript'e derlenir ve bu sayede React bileşenlerini daha okunabilir ve yazması kolay hale getirir.",
  },
  {
    id: 2,
    name: 'Props',
    description:
      'Props (Properties), React bileşenlerine veri aktarmak için kullanılan sabit (immutable) değerlerdir.\n' +
      'Bileşenler arası veri aktarımında kullanılır; üst bileşenden alt bileşene veri taşımak için idealdir.\n' +
      'Props, bileşenin dışından sağlandığı için, bileşen içinde doğrudan değiştirilemez ve sadece okunabilir (read-only) özelliktedir.',
  },
  {
    id: 3,
    name: 'State',
    description:
      'State, bir React bileşeninin zaman içinde değişebilir verisini saklar ve bileşenin durumunu yönetmek için kullanılır.\n' +
      'State değiştiğinde, React bileşeni otomatik olarak yeniden render edilir, böylece kullanıcı arayüzü güncel bilgileri yansıtır.\n' +
      'State, genellikle bileşenin içinde başlatılır ve sadece bileşen içindeki setState veya useState gibi fonksiyonlar aracılığıyla güncellenir; bu da bileşeni dinamik ve interaktif yapar.',
  },
];

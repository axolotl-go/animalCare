import OrganizationsCard from "@/components/OrganizationsCard";

export default function Organizations() {
  return (
    <main className="container mx-auto px-4" id="Organizations">
      <p className="text-4xl font-extrabold text-center mb-10">
        Organizaciones
      </p>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 text-lg md:text-xl lg:text-2xl xl:text-2xl text-center">
          <OrganizationsCard
            Image="https://yt3.googleusercontent.com/Wm3EgLuDVTehKfqew2WUOvjR9UhdwR8tE7q_0xFkc8_ASrNtXtxWSBv4QbUygZTqTwWkWB9Jww=s900-c-k-c0x00ffffff-no-rj"
            Title="PETA"
            Information="People for the Ethical Treatment of Animals (PETA) es la mayor organización de derechos animales a nivel mundial, con más de 9 millones de miembros y simpatizantes."
          />
          <OrganizationsCard
            Image="https://scontent.ftrc2-1.fna.fbcdn.net/v/t39.30808-6/336384481_759517155465522_2127797359478656084_n.png?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFOSsTZaPbebkWSMq2ytsvriYB-yUcf1l2JgH7JRx_WXchx9TwBexpxw_-6xYKxAIH__o0UN3VjAr3iVWvS9fX6&_nc_ohc=N20xgRx8mmAAb5Ho9is&_nc_ht=scontent.ftrc2-1.fna&oh=00_AfCCNIN-hoJ446n3mktM88ZyJUCt4MnyCUxaI8sF_-9iUA&oe=6625109E"
            Title="Zoofari"
            Information="Zoofari es un centro de conservación animal ubicado en Amacuzac, Morelos, México1. Fundado con un concepto único, Zoofari ofrece la oportunidad de conocer y convivir con más de 130 especies y 1,300 animales2. Su misión es fomentar la protección de la vida silvestre y promover un estilo de vida que respete y cuide todas las formas de vida"
          />

          <OrganizationsCard
            Image="https://www.biodiversidad.gob.mx/media/1/planeta/images/m-uicn.jpg"
            Title="UINC"
            Information="La Unión Internacional para la Conservación de la Naturaleza (UICN) es una organización global que une a miembros gubernamentales y de la sociedad civil para trabajar en la conservación de la naturaleza. Fundada en 1948, la UICN se ha convertido en la red ambiental más grande y diversa del mundo, con más de 1,400 organizaciones miembros y 16,000 expertos."
          />

          <OrganizationsCard
            Image="https://scontent.ftrc2-1.fna.fbcdn.net/v/t39.30808-6/347787045_1012454276587625_2074777628336715733_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFEZ0FXMPYakc0ayte-GLYBmSLUOIQ5cXeZItQ4hDlxd1TZH4kocCx1jYPn9cFKU_XIj6uFizFXKgROV3D4C93b&_nc_ohc=Wvn3V3rLgrEAb5iEhyk&_nc_ht=scontent.ftrc2-1.fna&oh=00_AfAFiBKYl-Le7e-Fo1ROc-ZUEC8KVMXM8hPpEgnIvhE0UQ&oe=66250804"
            Title="La World Association of Zoos and Aquariums (WAZA)"
            Information="La World Association of Zoos and Aquariums (WAZA) es la organización global que representa a los zoológicos y acuarios del mundo. Fundada en 1935, WAZA actúa como una alianza de asociaciones regionales, federaciones nacionales, zoológicos y acuarios, dedicada al cuidado y la conservación de animales y sus hábitats"
          />

          <OrganizationsCard
            Image="https://scontent.ftrc2-1.fna.fbcdn.net/v/t39.30808-6/358610623_653632516804760_1921401442528235998_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGM-mxAYrAXn8IMPwhW5dRsZU-MC6xGkntlT4wLrEaSe8i7q_V4D1bjl7WhtSQpECY_-Om5GGG8RJusQLssRgMM&_nc_ohc=Zfzg6KSXzO4Ab4ZV6l2&_nc_oc=AdimWBWPb-N24ymztqtIx_eSlUT3sr1pETtlq82kUkchIOLP7sECk-N2Gx2pL4vQQNqMUrbjRyJr0aiGuxXXn4aG&_nc_ht=scontent.ftrc2-1.fna&oh=00_AfBE6N7wH6OK2XiXIXsstsrkOn4Resxo2ZedyQQZB4QSlA&oe=6624FFBA"
            Title="Association of Zoos and Aquariums (AZA)"
            Information="La Asociación de Zoológicos y Acuarios (AZA), fundada en 1924, es una organización sin fines de lucro dedicada a la promoción de parques zoológicos y acuarios públicos en las áreas de conservación, educación, ciencia y recreación1. Con sede en Silver Spring, Maryland, Estados Unidos, la AZA sirve como un organismo acreditador para zoológicos y acuarios, asegurando que cumplan con altos estándares de cuidado animal"
          />

          {/* 2 */}

          <OrganizationsCard
            Image="https://scontent.ftrc2-1.fna.fbcdn.net/v/t39.30808-6/311054260_477291347759971_7235619655461121686_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHNrszYZ_Mxnv1Rs3mZqz7K3fQfM37SFX7d9B8zftIVfupC10Ui6zx7HkDjE22ZEbm33VTKeTrSp7wAmxcw1S_w&_nc_ohc=m6AYmgEUY3UAb6tymYh&_nc_ht=scontent.ftrc2-1.fna&oh=00_AfC6z457f-6iF1JU-uceZvi5dAGgUrlv3k53DhR1ofYCxA&oe=6624EB91"
            Title="Anima International"
            Information="Anima International es una organización dedicada a reducir el sufrimiento de los animales de la manera más efectiva posible. Fundada en 2018 por líderes de Polonia y Dinamarca, conecta a defensores de los animales de estos países, así como de Noruega, Ucrania, Reino Unido, Francia y Bulgaria1. Se enfoca en construir un fuerte movimiento de base y ha logrado éxitos en la promoción de políticas sin jaulas en entornos políticos desafiantes. La organización trabaja estratégicamente para fortalecer el movimiento de bienestar de los animales de granja en Europa y cuenta con el apoyo de importantes donantes como Open Philanthropy"
          />

          <OrganizationsCard
            Image="https://scontent.ftrc2-1.fna.fbcdn.net/v/t39.30808-6/357471104_644431831054136_2401364102999981345_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeETB3yhb56o8yBrykZfyCk5iJSYuNTW5sWIlJi41NbmxTgkMdP5dv0VCXr6biS0TIWMqkM911i1OPoJJ9jiy6of&_nc_ohc=udzGTpjl5kcAb7xwoZ9&_nc_ht=scontent.ftrc2-1.fna&oh=00_AfCXieqUw42Jg7NQ2J68_tjOSH4-cMNQOTUJ3VfuF2S6bw&oe=6624DFF5"
            Title="The Humane League"
            Information="The Humane League es una organización internacional sin fines de lucro que trabaja para poner fin al abuso de animales criados para consumo. Su misión es influir en las políticas de las compañías más grandes del mundo, demandar legislación y empoderar a otros para que tomen acción y dejen a los animales fuera de sus platos1. Fundada en 2005 en Filadelfia, The Humane League se ha expandido a México, Japón y el Reino Unido"
          />

          <OrganizationsCard
            Image="https://cdn.filestackcontent.com/resize=width:600,height:315,fit:max/quality=value:90/IfrhvgaASqWZQNg5JNHm"
            Title="Faunalytics"
            Information="La Asociación de Zoológicos y Acuarios (AZA), fundada en 1924, es una organización sin fines de lucro dedicada a la promoción de parques zoológicos y acuarios públicos en las áreas de conservación, educación, ciencia y recreación1. Con sede en Silver Spring, Maryland, Estados Unidos, la AZA sirve como un organismo acreditador para zoológicos y acuarios, asegurando que cumplan con altos estándares de cuidado animal"
          />
          <OrganizationsCard
            Image="https://scontent.ftrc2-1.fna.fbcdn.net/v/t39.30808-6/294013391_575710183910215_467014196636763883_n.png?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGRZNK7A0tE66N8fgNMp-vByAKM96wXuwrIAoz3rBe7CqEKxpc6KJEfO-niuhAGWpYpGwZaPhmIS5gBu5QbbAL6&_nc_ohc=xvbLNR6v6DwAb5W6sQU&_nc_ht=scontent.ftrc2-1.fna&oh=00_AfB18D766_NFhpT4Znb1CtlVEwhnyGsJIYZ1jQKeNA-5Nw&oe=662503A2"
            Title="Best Friends Animal Society"
            Information="Best Friends Animal Society es una organización sin fines de lucro que opera el santuario más grande en los Estados Unidos para animales sin hogar. Ofrece servicios como adopción, esterilización/castración y programas educativos1. Fundada en Arizona en 1986, la organización se ha dedicado a la creación de un mundo mejor a través de la bondad hacia las mascotas"
          />
          <OrganizationsCard
            Image="https://scontent.ftrc2-1.fna.fbcdn.net/v/t39.30808-6/282861003_374827874688259_6194173357536984232_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGygCBwZDSUv1uqQhujgJ1Ca0gpu_aF9etrSCm79oX161CSCWR5YDx0SP4ZCvHgmbavuig8R6lWlLdkeIdcMuVa&_nc_ohc=G9N7RsASaGQAb6Tuvsz&_nc_ht=scontent.ftrc2-1.fna&oh=00_AfDnPvWyIwr9oeA0bigVVKvZ6-nSsVhGZMxBioI61eF8HA&oe=6624DD43"
            Title="La African Wildlife Foundation (AWF)"
            Information="La African Wildlife Foundation (AWF) es una organización de conservación global con sede en África, comprometida con la protección de la vida silvestre y sus hábitats como partes fundamentales de una África moderna y próspera12. Fundada en 1961, AWF trabaja para proteger especies y tierras en peligro de extinción, promover empresas de conservación que benefician a las comunidades locales africanas y capacitar a ciudadanos africanos en conservación"
          />
        </div>
      </div>
    </main>
  );
}

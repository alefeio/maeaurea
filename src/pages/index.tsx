import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import { Header } from "../components/Header";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Leitura de tarô |
          Amarração amorosa |
          Abertura de caminhos |
          Afastamento de Rival |
          Cura de Vícios |
          Casamento Espiritual
        </title>
      </Head>

      <Header />
      <main className={styles.contentContainer3}>
        <div>
          <h1>
            Realizamos trabalhos<br />para todos os fins
          </h1>
          <section className={styles.hero3}>
            <p>
              Mãe Áurea oferece uma ampla gama de serviços para todos os fins, conectando você à energia divida.
            </p>
            <p>
              Com seus experientes serviços de advinhação e cartomancia, ela pode ajuda-lo a obter clareza sobre
              qualquer situação e a tomar decisões informadas.
            </p>
            <p>
              Experimente o poder do divino com Mãe Áurea.
            </p>

            <SubscribeButton><img src="/images/whatsapp.png" alt="WhatsApp" style={{ width: 70 }} /> (22) 981015939</SubscribeButton>
          </section>
        </div>
      </main>

      <main id="servicos" className={styles.contentContainer4}>
        <h1>
          Nossos Serviços
        </h1>
        <div>
          <span>
            <img src="/images/sv-cartomancia.jpg" alt="Cartomancia" />
            <h2>Leitura de tarô</h2>
            <p>Obtenha respostas sobre seu futuro e receba orientações com a leitura de tarô realizada pela Mãe Áurea.</p>
          </span>
          <span>
            <img src="/images/sv-amarracaoamorosa.jpg" alt="Amarracao amorosa" />
            <h2>Amarração amorosa</h2>
            <p>Não sofra mais com a rejeição da pessoa amada. Atráves da nossa amarração amorosa você irá obter seu amor de volta.</p>
          </span>
          <span>
            <img src="/images/sv-abertura-caminhos.png" alt="Abertura de caminhos" />
            <h2>Abertura de caminhos</h2>
            <p>Sua vida está estagnada? Nada tem dado certo pra você? Chega de caminhos mal resolvidos. Trago pra você agora todas as soluções para os problemas: familiares, financeiros, amorosos e etc.</p>
          </span>
          <span>
            <img src="/images/sv-afastamentorival.png" alt="Afastamento de rival" />
            <h2>Afastamento de Rival</h2>
            <p>Afaste toda inveja, mau-olhado, tristeza, encosto e pessoas falsas do seu relacionamento e da sua vida. Tenha do lado apenas quem quer a sua verdadeira felicidade.</p>
          </span>
          <span>
            <img src="/images/sv-curavicios.png" alt="Cura vicios" />
            <h2>Cura de Vícios</h2>
            <p>Você tem se afogado em bebidas, cigarros e jogos? Sente que não tem mais controle sobre a sua vida? Não se desespere, eu tenho a solução para o seu problema.</p>
          </span>
          <span>
            <img src="/images/sv-casamentoespiritual.png" alt="Casamento espiritual" />
            <h2>Casamento Espiritual</h2>
            <p>O casamento espiritual é um ritual que visa proporcionar boas vibrações, energias positivas, e bloquear tudo que possa interferir negativamente na união de casal.</p>
          </span>
        </div>
        <SubscribeButton><img src="/images/whatsapp.png" alt="WhatsApp" style={{ width: 70 }} /> (22) 981015939</SubscribeButton>
      </main>

      <main id="oferta-exclusiva" className={styles.contentContainer5}>
        <section className={styles.hero5}>
          <h1>
            <span>OFERTA EXCLUSIVA</span>
          </h1>
          <img src="/images/3perguntas.png" style={{ width: 400 }} alt="Casamento espiritual" />
          <br />
          <span>
            <strong>de R$ 150</strong>
          </span>
          <h2>
            <span>por R$</span>
            10,00
            {/* <br />
      <span>ou R$ 236,40</span> */}
          </h2>
          {/* <h3>Fale com a cigana:</h3> */}
          <SubscribeButton><img src="/images/whatsapp.png" alt="WhatsApp" style={{ width: 70, maxWidth: '100%' }} /> (22) 981015939</SubscribeButton>
        </section>
      </main>

      <main id="duvidas" className={styles.contentContainer6}>
        <h1>
          Dúvidas
        </h1>
        <section className={styles.hero6}>
          <h2>O que é cartomancia</h2>
          <p>
            Mãe Áurea oferece orientação espiritual e leituras através da prática tradicional da cartomancia. Nossa experiente cartomante, Mãe Letícia, pode fornecer insights precisos e ajudar você a ter clareza sobre o caminho de sua vida. Utilizando cartas de baralho tradicionais e seus dons espirituais, Mãe Letícia pode fornecer informações e orientações sobre suas dúvidas sobre vida, amor, carreira e família.
          </p>
          <h2>O que são trabalhos espirituais?</h2>
          <p>

            Para exercer o trabalho espiritual, os responsáveis pela ligação entre o mundo espiritual e material, os médiuns, irão receber  estas entidades e assim ajudar o consulente. Deste modo, percebemos que a Umbanda alcança um equilíbrio entre o sincretismo e as religiões afro-brasileiras.
          </p>
          <h2>Como funciona uma amarração amorosa?</h2>
          <p>
            Esse é um Trabalho Espiritual muito poderoso, que é usado para resolver problemas na vida amorosa, como dificuldades em um relacionamento em crise, amor não correspondido ou após uma separação, quando ainda existe amor.
          </p>
        </section>
      </main>
    </>
  );
}

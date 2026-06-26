import Link from "next/link";
import {
  Gift,
  ShoppingBag,
  BadgePercent,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Bell,
  Zap,
  Star,
  CheckCircle2,
} from "lucide-react";

const WHATSAPP =
 "https://chat.whatsapp.com/Ju2VAYqREI04D30nHQ3bgn?mode=gi_t"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-white">
      {/* Barra Superior */}

      <header className="bg-zinc-900 text-white">

        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-center gap-2 text-sm font-semibold tracking-wide">

          <Bell className="h-4 w-4 text-green-400" />

          ENTRE NO GRUPO DO WHATSAPP E RECEBA AS MELHORES OFERTAS

        </div>s

      </header>

      {/* Hero */}

      <section className="relative overflow-hidden">


        <div className="relative mx-auto max-w-7xl px-6 py-20">

          <div className="mx-auto max-w-3xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow">

              <Sparkles className="h-4 w-4 text-green-600" />

              <span className="text-sm font-semibold">

                CUPONS • OFERTAS • PROMOÇÕES

              </span>

            </div>

            <h1 className="mt-8 text-5xl md:text-6xl font-black tracking-tight text-zinc-900 leading-tight">
   Illa Garimpa🛍️🩷
</h1>

<p className="mt-6 text-xl md:text-2xl font-semibold text-zinc-800">
  As melhores promoções da internet em um só lugar.
</p>

<p className="mt-5 text-lg leading-8 text-zinc-600">
  Descubra diariamente as melhores ofertas de skincare, maquiagem, cosméticos, moda feminina, calçados, acessórios e itens para casa. Economize em produtos que fazem parte da sua rotina e receba tudo diretamente no seu WhatsApp.
</p>
<div className="mt-8 flex flex-wrap justify-center gap-3">

  <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
    💄 Beleza
  </span>

    <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
    🏠 Casa
  </span>

  <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
    🔥 Promoções
  </span>

</div>

            <div className="mt-12">

              <Link
                href={WHATSAPP}
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-4 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                ENTRAR NO GRUPO DO WHATSAPP

                <ArrowRight className="h-5 w-5" />
              </Link>

            </div>

          </div>

        </div>

      </section>{/* Benefícios */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-lg">
              <Gift className="mb-5 h-10 w-10 text-green-600" />
              <h3 className="text-xl font-bold text-zinc-900">
                Cupons exclusivos
              </h3>
              <p className="mt-3 text-zinc-600">
                Receba cupons atualizados diariamente para economizar nas
                maiores lojas do Brasil.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-lg">
              <BadgePercent className="mb-5 h-10 w-10 text-green-600" />
              <h3 className="text-xl font-bold text-zinc-900">
                Promoções reais
              </h3>
              <p className="mt-3 text-zinc-600">
                Apenas ofertas selecionadas com descontos que realmente valem
                a pena.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-lg">
              <Zap className="mb-5 h-10 w-10 text-green-600" />
              <h3 className="text-xl font-bold text-zinc-900">
                Avisos rápidos
              </h3>
              <p className="mt-3 text-zinc-600">
                Seja uma das primeiras pessoas a aproveitar cada promoção antes
                que ela acabe.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Como funciona */}

      <section className="bg-zinc-50 py-24">

        <div className="mx-auto max-w-6xl px-6">

          <h2 className="text-center text-4xl font-black text-zinc-900">
            Como funciona
          </h2>

          <p className="mt-5 text-center text-lg text-zinc-600">
            Entrar é gratuito e leva menos de 1 minuto.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl bg-white p-8 shadow">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white font-bold text-xl">
                1
              </div>

              <h3 className="text-2xl font-bold">
                Entre no grupo
              </h3>

              <p className="mt-4 text-zinc-600">
                Clique no botão e participe gratuitamente do grupo do WhatsApp.
              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white font-bold text-xl">
                2
              </div>

              <h3 className="text-2xl font-bold">
                Receba as ofertas
              </h3>

              <p className="mt-4 text-zinc-600">
                Todos os dias enviamos promoções, cupons e descontos.
              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white font-bold text-xl">
                3
              </div>

              <h3 className="text-2xl font-bold">
                Economize
              </h3>

              <p className="mt-4 text-zinc-600">
                Aproveite as melhores oportunidades antes que acabem.
              </p>

            </div>

          </div>

          <div className="mt-16 text-center">

            <Link
              href={WHATSAPP}
              target="_blank"
              className="inline-flex items-center gap-3 rounded-xl bg-green-600 px-10 py-5 text-lg font-bold text-white shadow-lg transition hover:bg-green-700"
            >
              ENTRAR NO GRUPO DO WHATSAPP

              <ArrowRight className="h-5 w-5" />

            </Link>

          </div>

        </div>

      </section>
      {/* Por que escolher a Illa Garimpa */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <h2 className="text-4xl font-black text-zinc-900">
              Por que entrar na Illa Garimpa?
            </h2>

            <p className="mt-5 text-lg text-zinc-600">
              Nossa missão é ajudar você a economizar todos os dias.
            </p>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">

            <div className="flex gap-4 rounded-2xl border bg-zinc-50 p-6">

              <CheckCircle2 className="mt-1 h-7 w-7 text-green-600"/>

              <div>

                <h3 className="font-bold text-xl">
                  Promoções verificadas
                </h3>

                <p className="mt-2 text-zinc-600">
                  Compartilhamos apenas ofertas reais.
                </p>

              </div>

            </div>

            <div className="flex gap-4 rounded-2xl border bg-zinc-50 p-6">

              <ShieldCheck className="mt-1 h-7 w-7 text-green-600"/>

              <div>

                <h3 className="font-bold text-xl">
                  Grupo gratuito
                </h3>

                <p className="mt-2 text-zinc-600">
                  Você entra gratuitamente e pode sair quando quiser.
                </p>

              </div>

            </div>

            <div className="flex gap-4 rounded-2xl border bg-zinc-50 p-6">

              <ShoppingBag className="mt-1 h-7 w-7 text-green-600"/>

              <div>

                <h3 className="font-bold text-xl">
                  Grandes lojas
                </h3>

                <p className="mt-2 text-zinc-600">
                  Amazon, Mercado Livre, Shopee, Magalu e muitas outras.
                </p>

              </div>

            </div>

            <div className="flex gap-4 rounded-2xl border bg-zinc-50 p-6">

              <Star className="mt-1 h-7 w-7 text-green-600"/>

              <div>

                <h3 className="font-bold text-xl">
                  Atualizações diárias
                </h3>

                <p className="mt-2 text-zinc-600">
                  Novas oportunidades chegam todos os dias.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA Final */}

      <section className="bg-zinc-900 py-24 text-center text-white">

        <div className="mx-auto max-w-3xl px-6">

          <h2 className="text-5xl font-black">

            Entre agora na Illa Garimpa

          </h2>

          <p className="mt-6 text-xl text-zinc-300">

            Não perca nenhuma promoção.
            Receba cupons e descontos diretamente no seu WhatsApp.

          </p>

          <div className="mt-12">

            <Link
              href={WHATSAPP}
              target="_blank"
              className="inline-flex items-center gap-3 rounded-xl bg-green-600 px-12 py-5 text-lg font-bold text-white transition hover:bg-green-700"
            >

              ENTRAR NO GRUPO DO WHATSAPP

              <ArrowRight className="h-5 w-5"/>

            </Link>

          </div>

        </div>

      </section>
<section className="mx-auto mt-24 max-w-6xl px-6">

  <div className="text-center">

    <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
      💎 O que você encontra no grupo
    </span>

    <h2 className="mt-6 text-4xl font-bold text-zinc-900">
      Promoções selecionadas todos os dias
    </h2>

    <p className="mt-4 text-lg text-zinc-600">
      Nós fazemos o garimpo para que você economize tempo e dinheiro.
    </p>

  </div>

  <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="font-bold text-lg">✅ Cupons exclusivos</h3>
      <p className="mt-2 text-zinc-600">
        Cupons atualizados diariamente.
      </p>
    </div>

    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="font-bold text-lg">🔥 Promoções relâmpago</h3>
      <p className="mt-2 text-zinc-600">
        Ofertas que costumam acabar rapidamente.
      </p>
    </div>

    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="font-bold text-lg">💰 Grandes descontos</h3>
      <p className="mt-2 text-zinc-600">
        Produtos com preços muito abaixo do normal.
      </p>
    </div>

    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="font-bold text-lg">✔️ Ofertas verificadas</h3>
      <p className="mt-2 text-zinc-600">
        Compartilhamos apenas ofertas que realmente valem a pena.
      </p>
    </div>

    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="font-bold text-lg">📲 Tudo no WhatsApp</h3>
      <p className="mt-2 text-zinc-600">
        Você recebe as promoções diretamente no grupo.
      </p>
    </div>

    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="font-bold text-lg">🎁 Novidades diariamente</h3>
      <p className="mt-2 text-zinc-600">
        Sempre há novas oportunidades para economizar.
      </p>
    </div>

  </div>

</section>
<section className="mx-auto mt-24 max-w-4xl px-6 text-center">

  <div className="rounded-3xl bg-gradient-to-b from-fuchsia-200 via-rose-100 to-whites p-10">

    <div className="text-4xl">
      ⭐⭐⭐⭐⭐
    </div>

    <h2 className="mt-6 text-3xl font-bold">
      Todos os dias surgem novas oportunidades.
    </h2>

    <p className="mt-4 text-lg text-zinc-600">
      Entre no grupo e acompanhe promoções, cupons e ofertas selecionadas para facilitar sua busca por boas oportunidades.
    </p>

  </div>

</section>
{/* ================= BLOCO DE CONFIANÇA ================= */}

<section className="bg-white py-20">
  <div className="mx-auto max-w-5xl px-6">

    <div className="text-center">

      <div className="text-3xl mb-5">
        ⭐⭐⭐⭐⭐
      </div>

      <h2 className="text-4xl font-bold text-zinc-900">
        Milhares de pessoas já economizam com a Illa Garimpa
      </h2>

      <p className="mt-6 text-lg text-zinc-600 max-w-3xl mx-auto leading-8">
        Todos os dias compartilhamos promoções reais, cupons exclusivos e
        oportunidades verificadas para ajudar você a economizar nas suas
        compras.
      </p>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-3">

      <div className="rounded-3xl border border-zinc-200 bg-white p-8 text-center shadow-sm hover:shadow-xl transition">

        <div className="text-5xl font-bold text-green-600">
          +10 mil
        </div>

        <p className="mt-3 text-zinc-600">
          Pessoas acompanhando promoções diariamente.
        </p>

      </div>

      <div className="rounded-3xl border border-zinc-200 bg-white p-8 text-center shadow-sm hover:shadow-xl transition">

        <div className="text-5xl font-bold text-green-600">
          Todos os dias
        </div>

        <p className="mt-3 text-zinc-600">
          Novas ofertas e cupons publicados.
        </p>

      </div>

      <div className="rounded-3xl border border-zinc-200 bg-white p-8 text-center shadow-sm hover:shadow-xl transition">

        <div className="text-5xl font-bold text-green-600">
          100%
        </div>

        <p className="mt-3 text-zinc-600">
          Gratuito para participar do grupo.
        </p>

      </div>

    </div>

    <div className="mt-16 text-center">

      <Link
        href={WHATSAPP}
        target="_blank"
        className="inline-flex items-center gap-3 rounded-2xl bg-green-600 px-10 py-5 text-lg font-bold text-white transition hover:bg-green-700 hover:scale-105"
      >
        ENTRAR NO GRUPO DO WHATSAPP
        <ArrowRight className="h-6 w-6" />
      </Link>

    </div>

  </div>
</section>


      {/* Rodapé */}

      <footer className="border-t bg-white">

        <div className="mx-auto max-w-7xl px-6 py-10 text-center">

          <h3 className="text-3xl font-black tracking-tight text-zinc-900">

            Illa Garimpa

          </h3>

          <p className="mt-4 text-zinc-600">

            As melhores promoções, cupons e descontos reunidos em um único lugar.

          </p>

          <p className="mt-8 text-sm text-zinc-400">

            © {new Date().getFullYear()} Illa Garimpa.
            Todos os direitos reservados.

          </p>

        </div>

      </footer>

    </main>

  );

} 
import CategoryLayout from "../layouts/categoryLayout";
import { Accordion } from "keep-react";
import { Plus } from 'phosphor-react'

const faqData = [
  {
    question: "Como puedo declarar las zapatillas?",
    answer: "The Keep React is a collection of UI components, styles, and guidelines that ensure consistency and a unified user experience across our products. It simplifies the design and development process by providing ready-to-use components that can be easily customized and integrated into various applications."
  },
  {
    question: "Puedo declarar menos ?",
    answer: "Th adsae Keep React is a collection of UI components, styles, and guidelines that ensure consistency and a unified user experience across our products. It simplifies the design and development process by providing ready-to-use components that can be easily customized and integrated into various applications."
  },
  {
    question: "Toc toc es dislexico?",
    answer: "Th adsae Keep React is a collection of UI components, styles, and guidelines that ensure consistency and a unified user experience across our products. It simplifies the design and development process by providing ready-to-use components that can be easily customized and integrated into various applications."
  },
];

export default function Pregunta() {
    return (
      <section className="text-white p-6 lg:p-10 mx-auto max-w-screen-lg">
        <h1 className="flex items-center justify-center py-4 text-slate-200 text-2xl md:text-4xl">PREGUNTAS FRECUENTES</h1>
        <Accordion>
          {faqData.map((faq, index) => (
            <Accordion.Panel key={index} className="bg-metal-900 rounded-xl mb-4">
              <Accordion.Container className="rounded-xl bg-metal-900 text-white group-hover:bg-metal-800">
                <Accordion.Title className="text-white text-base md:text-lg lg:text-xl">{faq.question}</Accordion.Title>
                <Accordion.Icon>
                  <Plus size={24} color="#fff" />
                </Accordion.Icon>
              </Accordion.Container>
              <Accordion.Content className="text-white text-sm md:text-base lg:text-lg">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      </section>
    );
  }
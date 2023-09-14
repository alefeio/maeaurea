import { Button, Input, NumberInput, NumberInputField, Select, Spinner } from '@chakra-ui/react';
import emailjs from 'emailjs-com';
import { useState } from 'react';

import InputMask from "react-input-mask";

export default function ContatoCartaoConsulta() {
    const [feedenvio, setFeedenvio] = useState("");
    const [loading, setLoading] = useState(false);

    async function sendEmail(e: any) {
        e.preventDefault();

        setLoading(true)

        const envio = await emailjs.sendForm(
            "service_du9vf7o",
            "template_beg74yq",
            e.target,
            "PRIZusp-RqsxpipMN"
        )

        envio.status === 200 
            ? (setLoading(false), setFeedenvio("Sua solicitação foi enviada com sucesso!")) 
            : (setLoading(false), setFeedenvio("Ocorreu um erro ao solicitar o seu cartão. Tente novamente!"));
    }

    return (
        <>
            {!feedenvio ? (
                <>
                    {!loading ? (
                        <form onSubmit={sendEmail}>
                            <Input placeholder="Nome" name="nome" required />
                            <Input placeholder="E-mail" name="email" type="email" required />
                            <Input placeholder="Telefone" as={InputMask} mask="(**) *****-****" maskChar={null} name="telefone" required />
                            <span>
                                <Select placeholder="Escolha o cartão" name="cartao">
                                    <option value="Cartao Blue">Cartão Blue</option>
                                    <option value="Cartao Black">Cartão Black</option>
                                </Select>
                            </span>
                            <Button colorScheme="teal" type="submit">Solicitar</Button>
                        </form>
                    ) : (
                        <span>
                            <Spinner size='xl' />
                        </span>
                    )}
                </>
            ) : (
                <span>
                    <h1>{feedenvio}</h1>
                    <Button colorScheme="teal" onClick={() => setFeedenvio("")}>Clique aqui solicitar outro cartão</Button>
                </span>
            )}
        </>
    );
}

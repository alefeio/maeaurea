import { Button, Input, NumberInputField, Select, Spinner, Textarea } from '@chakra-ui/react';
import emailjs from 'emailjs-com';
import { useState } from 'react';

import InputMask from "react-input-mask";

export default function ContatoEnvio() {
    const [feedenvio, setFeedenvio] = useState("");
    const [loading, setLoading] = useState(false);

    async function sendEmail(e: any) {
        e.preventDefault();

        setLoading(true)
        const envio = await emailjs.sendForm(
            "service_du9vf7o",
            "template_az27ccp",
            e.target,
            "PRIZusp-RqsxpipMN"
        )

        envio.status === 200 
            ? (setLoading(false), setFeedenvio("Sua mensagem foi enviada com sucesso!")) 
            : (setLoading(false), setFeedenvio("Ocorreu um erro ao enviar sua mensagem. Tente novamente!"));
    }

    return (
        <>
            {!feedenvio ? (
                <>
                    {!loading ? (
                        <form onSubmit={sendEmail}>
                            <Input placeholder="Seu nome" name="nome" required />
                            <Input placeholder="Seu e-mail" type="email" name="email" required />
                            <Input as={InputMask} mask="(**) *****-****" maskChar={null} placeholder="Seu telefone/WhatsApp" name="telefone" required />
                            <span>
                                <Textarea
                                    name="mensagem"
                                    placeholder='Sua mensagem.'
                                    size='sm'
                                />
                            </span>
                            <Button colorScheme="teal" type="submit">Enviar</Button>
                        </form>
                    ) : (
                        <span>
                            <h2><Spinner size='xl' /></h2>
                        </span>
                    )}
                </>
            ) : (
                <span>
                    <h2>{feedenvio}</h2>
                    <Button colorScheme="teal" onClick={() => setFeedenvio("")}>Clique aqui para enviar novamente</Button>
                </span>
            )}
        </>
    );
}

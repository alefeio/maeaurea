import { Button, Input, NumberInputField, Select, Spinner, Textarea } from '@chakra-ui/react';
import emailjs from 'emailjs-com';
import { useState } from 'react';

import InputMask from "react-input-mask";

export default function ContatoConsulta() {
    const [feedenvio, setFeedenvio] = useState("");
    const [loading, setLoading] = useState(false);

    async function sendEmail(e: any) {
        e.preventDefault();

        setLoading(true)
        const envio = await emailjs.sendForm(
            "service_du9vf7o",
            "template_e3cyn5m",
            e.target,
            "PRIZusp-RqsxpipMN"
        )

        envio.status === 200 
            ? (setLoading(false), setFeedenvio("Sua consulta foi agendada com sucesso!")) 
            : (setLoading(false), setFeedenvio("Ocorreu um erro ao agendar sua consulta. Tente novamente!"));
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
                            <div>
                                <span>
                                <Input placeholder="Data" type="datetime-local" name="data_consulta" required />
                                </span>
                                <span>
                                <small>Data da consulta (segunda à sexta: 08h às 18h | sábado: 08h às 12h)</small>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <Select placeholder="Seu convênio" name="convenio">
                                        <option value="Hapvida +Odonto">Hapvida +Odonto</option>
                                        <option value="Amil Dental">Amil Dental</option>
                                        <option value="Unimed Odonto">Unimed Odonto</option>
                                        <option value="Total Life">Total Life</option>
                                        <option value="Interodonto">Interodonto</option>
                                        <option value="Santander Odontologia">Santander Odontologia</option>
                                        <option value="Uniodonto">Uniodonto</option>
                                        <option value="Sulamerica Saude">Sulamérica Saúde</option>
                                        <option value="Shopping Patio Belem">Shopping Pátio Belém</option>
                                        <option value="Sindicato dos Bancarios">Sindicato dos Bancários</option>
                                        <option value="Sind Mapa">Sind Mapa</option>
                                        <option value="Sinthosp">Sinthosp</option>
                                        <option value="Sindlojas">Sindlojas</option>
                                        <option value="Infraero">Infraero</option>
                                        <option value="ALBS">ALBS</option>
                                    </Select>
                                </span>
                                <span>
                                <small>Escolha o seu convênio</small>
                                </span>
                            </div>
                            </span>
                            <span>
                            <Textarea
                                name="mensagem"
                                placeholder='Se necessário, envie uma mensagem.'
                                size='sm'
                            />
                            </span>
                            <Button colorScheme="teal" type="submit">Agendar</Button>
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
                    <Button colorScheme="teal" onClick={() => setFeedenvio("")}>Clique aqui para reagendar</Button>
                </span>
            )}
        </>
    );
}

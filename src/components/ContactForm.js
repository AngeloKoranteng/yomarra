"use client";
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function ContactForm() {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Verzenden...');

        try {
            const formData = new FormData(e.target);
            formData.append("access_key", "c031c2da-078a-40a2-bbe4-e0e64f7eaefe"); 

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                e.target.reset(); // Maak formulier leeg
            } else {
                console.log("Error from Web3Forms:", data);
                setStatus('error');
            }
        } catch (error) {
            console.error("Netwerk fout:", error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: '4rem', color: '#4CAF50', marginBottom: '1rem' }}>?</div>
                <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-montserrat)', color: '#111', marginBottom: '1rem' }}>Bericht verzonden!</h3>
                <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6' }}>
                    "Bedankt! Ik neem binnen 24 uur contact met je op. � Marvin, Yomarra"
                </p>
                <button onClick={() => setStatus('')} style={{ 
                    marginTop: '2rem', 
                    padding: '12px 24px', 
                    backgroundColor: '#F0E8DC', 
                    color: '#8B3A0F', 
                    border: 'none', 
                    borderRadius: '8px', 
                    fontWeight: 'bold', 
                    cursor: 'pointer' 
                }}>Nog een bericht sturen</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="name" style={{ fontWeight: 'bold', color: '#333', fontSize: '0.9rem' }}>Naam (verplicht)</label>
                    <input type="text" id="name" name="name" required placeholder="Jouw volledige naam" style={{
                        padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', backgroundColor: '#fafafa', fontSize: '1rem', fontFamily: 'inherit'
                    }} />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="email" style={{ fontWeight: 'bold', color: '#333', fontSize: '0.9rem' }}>E-mailadres (verplicht)</label>
                    <input type="email" id="email" name="email" required placeholder="jouw@email.com" style={{
                        padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', backgroundColor: '#fafafa', fontSize: '1rem', fontFamily: 'inherit'
                    }} />
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="phone" style={{ fontWeight: 'bold', color: '#333', fontSize: '0.9rem' }}>Telefoonnummer (optioneel)</label>
                    <input type="tel" id="phone" name="phone" placeholder="06 12345678" style={{
                        padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', backgroundColor: '#fafafa', fontSize: '1rem', fontFamily: 'inherit'
                    }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="company" style={{ fontWeight: 'bold', color: '#333', fontSize: '0.9rem' }}>Bedrijfsnaam (optioneel)</label>
                    <input type="text" id="company" name="company" placeholder="Jouw bedrijf" style={{
                        padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', backgroundColor: '#fafafa', fontSize: '1rem', fontFamily: 'inherit'
                    }} />
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="package" style={{ fontWeight: 'bold', color: '#333', fontSize: '0.9rem' }}>Welk pakket heeft je interesse?</label>
                <select id="package" name="package" style={{
                    padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', backgroundColor: '#fafafa', fontSize: '1rem', fontFamily: 'inherit', appearance: 'none', cursor: 'pointer'
                }}>
                    <option value="START">START</option>
                    <option value="GROEI">GROEI</option>
                    <option value="ALL-IN">ALL-IN</option>
                    <option value="Weet ik nog niet">Weet ik nog niet</option>
                </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="message" style={{ fontWeight: 'bold', color: '#333', fontSize: '0.9rem' }}>Bericht / Vraag (verplicht)</label>
                <textarea id="message" name="message" required placeholder="Waar kunnen we je mee helpen?" rows="5" style={{
                    padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', backgroundColor: '#fafafa', fontSize: '1rem', fontFamily: 'inherit', resize: 'vertical'
                }}></textarea>
            </div>

            {status === 'error' && (
                <div style={{ color: '#d32f2f', backgroundColor: '#ffebee', padding: '1rem', borderRadius: '8px', fontSize: '0.9rem' }}>
                    Er is helaas iets misgegaan bij het verzenden. Probeer het later nog eens of stuur ons direct een e-mail.
                </div>
            )}

            <button type="submit" disabled={status === 'Verzenden...'} style={{
                marginTop: '1rem',
                backgroundColor: '#8B3A0F',
                color: '#fff',
                border: 'none',
                padding: '1.2rem',
                borderRadius: '12px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: status === 'Verzenden...' ? 'not-allowed' : 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.8rem',
                opacity: status === 'Verzenden...' ? 0.7 : 1,
                transition: 'all 0.3s ease'
            }}>
                {status === 'Verzenden...' ? 'Bezig met sturen...' : <>Verstuur bericht <FaArrowRight /></>}
            </button>
        </form>
    );
}

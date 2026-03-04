'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ContactFormContent() {
    const searchParams = useSearchParams();
    const [formStatus, setFormStatus] = useState('idle');
    const [selectedPlan, setSelectedPlan] = useState('');

    useEffect(() => {
        const plan = searchParams.get('plan');
        if (plan) {
            setSelectedPlan(plan);
        }
    }, [searchParams]);

    async function handleSubmit(e) {
        e.preventDefault();
        setFormStatus('submitting');
        
        const formData = new FormData(e.target);
        
        try {
            // We use standard FormData without Content-Type header
            // This prevents a CORS "Preflight" request which often fails on localhost
            const res = await fetch("https://formsubmit.co/ajax/infoyomarra@gmail.com", {
                method: "POST",
                body: formData,
                headers: { 
                    'Accept': 'application/json'
                }
            });
            
            if (res.ok) {
                setFormStatus('success');
            } else {
                console.error("Form submission failed", res);
                throw new Error("Server reageerde niet correct.");
            }
        } catch (error) {
            console.error("Form error", error);
            setFormStatus('error');
            // No alert needed here, we show the message below the button
        }
    }

    if (formStatus === 'success') {
        return (
            <div className="success-message" style={{textAlign: 'center', padding: '2rem'}}>
                <div style={{color: 'green', fontSize: '3rem', marginBottom: '1rem'}}>✓</div>
                <h3>Bedankt voor je aanvraag!</h3>
                <p>We hebben je bericht ontvangen en nemen zo snel mogelijk contact met je op.</p>
                <button onClick={() => setFormStatus('idle')} className="btn" style={{marginTop: '1rem'}}>Nog een bericht sturen</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Honeypot */}
            <input type="text" name="_honey" style={{display: 'none'}} />
            
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value={`Nieuwe aanvraag via website${selectedPlan ? ` - Pakket: ${selectedPlan}` : ''}`} />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_autoresponse" value="Bedankt voor je bericht! We hebben het ontvangen en nemen zo snel mogelijk contact op." />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="name" style={{ fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#111' }}>Naam</label>
                    <input type="text" id="name" name="name" required placeholder="Jouw naam" style={{ width: '100%', padding: '1rem', backgroundColor: '#F5F5F5', border: 'none', borderRadius: '8px', fontSize: '1rem' }} />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="email" style={{ fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#111' }}>Email Adres</label>
                    <input type="email" id="email" name="email" required placeholder="jouw@email.nl" style={{ width: '100%', padding: '1rem', backgroundColor: '#F5F5F5', border: 'none', borderRadius: '8px', fontSize: '1rem' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="service" style={{ fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#111' }}>Waar heb je hulp bij nodig?</label>
                    <select id="service" name="service" defaultValue="Algemeen" style={{ width: '100%', padding: '1rem', backgroundColor: '#F5F5F5', border: 'none', borderRadius: '8px', fontSize: '1rem' }}>
                        <option value="Algemeen">Algemeen advies</option>
                        <option value="Strategie">Social Media Strategie</option>
                        <option value="Content">Content Creatie</option>
                        <option value="Beheer">Social Media Beheer</option>
                    </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="plan" style={{ fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#111' }}>Kies een Pakket (Optioneel)</label>
                    <select id="plan" name="plan" value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)} style={{ width: '100%', padding: '1rem', backgroundColor: '#F5F5F5', border: 'none', borderRadius: '8px', fontSize: '1rem' }}>
                        <option value="">-- Geen pakket geselecteerd --</option>
                        <option value="start">Start Pakket (€250)</option>
                        <option value="groei">Groei Pakket (€499/mnd)</option>
                        <option value="all-in">All-in Pakket (€1000/mnd)</option>
                    </select>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="message" style={{ fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#111' }}>Jouw Bericht</label>
                <textarea id="message" name="message" required placeholder="Vertel kort wat je wensen zijn..." rows="5" style={{ width: '100%', padding: '1rem', backgroundColor: '#F5F5F5', border: 'none', borderRadius: '8px', fontSize: '1rem', resize: 'vertical' }}></textarea>
            </div>
            
            <button type="submit" disabled={formStatus === 'submitting'} style={{ width: '100%', padding: '1.2rem', backgroundColor: '#111', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', marginTop: '0.5rem' }}>
                {formStatus === 'submitting' ? 'Bezig met verzenden...' : 'Verstuur Aanvraag'}
            </button>
            
            {formStatus === 'error' && (
                <div style={{color: 'red', marginTop: '1rem', textAlign: 'center', backgroundColor: '#fff0f0', padding: '10px', borderRadius: '5px'}}>
                    <strong>Het versturen is niet gelukt.</strong>
                    <p style={{fontSize: '0.9rem', marginTop: '0.5rem'}}>
                        Waarschijnlijk blokkeert een browser-instelling of adblocker het formulier.<br/>
                        Stuur je aanvraag direct per mail:<br/>
                        <a href="mailto:infoyomarra@gmail.com?subject=Aanvraag via website" style={{fontWeight: 'bold', textDecoration: 'underline'}}>infoyomarra@gmail.com</a>
                    </p>
                </div>
            )}
        </form>
    );
}

export default function ContactForm() {
    return (
        <Suspense fallback={<div>Loading form...</div>}>
            <ContactFormContent />
        </Suspense>
    );
}

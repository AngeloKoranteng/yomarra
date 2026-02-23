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
        <form onSubmit={handleSubmit} className="contact-form">
            {/* Honeypot */}
            <input type="text" name="_honey" style={{display: 'none'}} />
            
            <input type="hidden" name="_captcha" value="false" />
            {/* Dynamic subject line to include selected plan */}
            <input type="hidden" name="_subject" value={`Nieuwe aanvraag via Yomarra website${selectedPlan ? ` - Pakket: ${selectedPlan}` : ''}`} />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_autoresponse" value="Bedankt voor je bericht! We hebben het ontvangen en nemen zo snel mogelijk contact op." />

            <div className="form-group">
                <label htmlFor="name">Naam</label>
                <input type="text" id="name" name="name" required placeholder="Jouw naam" />
            </div>
            
            <div className="form-group">
                <label htmlFor="email">Email Adres</label>
                <input type="email" id="email" name="email" required placeholder="jouw@email.nl" />
            </div>

            <div className="form-group">
                <label htmlFor="service">Waar heb je hulp bij nodig?</label>
                <select id="service" name="service" defaultValue="Algemeen">
                    <option value="Algemeen">Algemeen advies</option>
                    <option value="Strategie">Social Media Strategie</option>
                    <option value="Content">Content Creatie</option>
                    <option value="Beheer">Social Media Beheer</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="plan">Kies een Pakket (Optioneel)</label>
                <select 
                    id="plan" 
                    name="plan" 
                    value={selectedPlan} 
                    onChange={(e) => setSelectedPlan(e.target.value)}
                >
                    <option value="">-- Geen pakket geselecteerd --</option>
                    <option value="start">Start Pakket (€250)</option>
                    <option value="groei">Groei Pakket (€499/mnd)</option>
                    <option value="all-in">All-in Pakket (€1000/mnd)</option>
                </select>
            </div>
            
            <div className="form-group">
                <label htmlFor="message">Jouw Bericht</label>
                <textarea id="message" name="message" rows="5" required placeholder="Vertel kort wat je wensen zijn..."></textarea>
            </div>
            
            <button type="submit" className="btn btn-block" disabled={formStatus === 'submitting'}>
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

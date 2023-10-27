// ParticleComponent.js
import React, { useEffect } from 'react';
import { particleOptions } from '../Particles/particles-config';

const ParticleComponent = () => {
    useEffect(() => {
        if (window.particlesJS) {
            window.particlesJS('particles-js', particleOptions);
        }
    }, []);

    return (
        <div id="particles-js" className='bg-black fixed top-0 left-0 w-full h-full'></div>
    );
};

export default ParticleComponent;

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
        <div id="particles-js" className='fixed top-0 left-0 w-full h-full z-[1]'></div>
    );
};

export default ParticleComponent;

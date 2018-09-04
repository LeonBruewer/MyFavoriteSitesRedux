import React from 'react';
import { HEADLINE, DESCRIPTION } from '../../constants/text';

const Intro = () => (
    <div className="tapp__intro">
        <h1 className="headline">
            {HEADLINE}
        </h1>
        <p>
        Hier findest du alle deine lieblings Chayns Sites. Wenn du deine eigene Seite hinzufügen möchtest, kannst du sie <a href="#">hier beantragen.</a>        </p>
    </div>
);

export default Intro;

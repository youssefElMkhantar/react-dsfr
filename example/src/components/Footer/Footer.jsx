import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  Footer,
  FooterTopCategory,
  FooterLink,
  FooterTop,
  FooterBody,
  FooterOperator,
  FooterBodyItem,
  FooterPartners,
  FooterPartnersTitle,
  FooterPartnersLogo,
  Logo,
  FooterBottom,
  FooterCopy,
  Link,
  SwitchTheme,
} from '@dataesr/react-dsfr';

const FooterExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Footer>
        <FooterTop>
          <FooterTopCategory title="Nom de la catégorie">
            <FooterLink
              asLink={<RouterLink to="/myFooterLink" />}
            >
              Footer Link Router
            </FooterLink>
            <FooterLink href="/">Footer Link</FooterLink>
            <FooterLink href="/">Footer Link</FooterLink>
            <FooterLink href="/">Footer Link</FooterLink>
            <FooterLink href="/">Footer Link</FooterLink>
          </FooterTopCategory>
          <FooterTopCategory title="Nom de la catégorie">
            <FooterLink href="/">Footer Link</FooterLink>
            <FooterLink href="/">Footer Link</FooterLink>
            <FooterLink href="/">Footer Link</FooterLink>
            <FooterLink href="/">Footer Link</FooterLink>
            <FooterLink href="/">Footer Link</FooterLink>
            <FooterLink href="/">Footer Link</FooterLink>
          </FooterTopCategory>
          <FooterTopCategory title="Nom de la catégorie">
            <FooterLink href="/">Footer Link</FooterLink>
            <FooterLink href="/">Footer Link</FooterLink>
            <FooterLink href="/">Footer Link</FooterLink>
            <FooterLink href="/">Footer Link</FooterLink>
          </FooterTopCategory>
          <FooterTopCategory title="Nom de la catégorie">
            <FooterLink href="/">Footer Link</FooterLink>
            <FooterLink href="/">Footer Link</FooterLink>
            <FooterLink href="/">Footer Link</FooterLink>
            <FooterLink href="/">Footer Link</FooterLink>
          </FooterTopCategory>
          <FooterTopCategory title="Nom de la catégorie">
            <FooterLink href="/">Footer Link</FooterLink>
            <FooterLink href="/">Footer Link</FooterLink>
            <FooterLink href="/">Footer Link</FooterLink>
            <FooterLink href="/">Footer Link</FooterLink>
          </FooterTopCategory>
        </FooterTop>
        <FooterBody
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Uenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        >
          <Logo>Ministère de l‘enseignement supérieur de la rechercher et de l‘innovation</Logo>
          <FooterOperator>
            <img src="https://fakeimg.pl/145x81/" alt="texte alternatif" />
          </FooterOperator>
          <FooterBodyItem>
            <Link href="https://legifrance.gouv.fr" target="_blank">
              legifrance.gouv.fr
            </Link>
          </FooterBodyItem>
          <FooterBodyItem>
            <Link href="https://gouvernement.fr" target="_blank">
              gouvernement.fr
            </Link>
          </FooterBodyItem>
          <FooterBodyItem>
            <Link href="https://service-public.fr" target="_blank">
              service-public.fr
            </Link>
          </FooterBodyItem>
          <FooterBodyItem>
            <Link href="https://data.gouv.fr" target="_blank">
              data.gouv.fr
            </Link>
          </FooterBodyItem>
        </FooterBody>
        <FooterPartners>
          <FooterPartnersTitle>Nos partenaires</FooterPartnersTitle>
          <FooterPartnersLogo
            isMain
            href="/"
            imageSrc="https://dummyimage.com/140x80/000/fff.png&text=main-logo"
            imageAlt="Logo 1"
          />
          <FooterPartnersLogo
            href="/"
            imageSrc="https://dummyimage.com/100x80/000/fff.png&text=logo+2"
            imageAlt="Logo 2"
          />
          <FooterPartnersLogo
            href="/"
            imageSrc="https://dummyimage.com/100x80/000/fff.png&text=logo+3"
            imageAlt="Logo 3"
          />
          <FooterPartnersLogo
            href="/"
            imageSrc="https://dummyimage.com/100x80/000/fff.png&text=logo+4"
            imageAlt="Logo 4"
          />
        </FooterPartners>
        <FooterBottom>
          <FooterLink href="/" target="_blank">Footer Link</FooterLink>
          <FooterLink href="/">Footer Link</FooterLink>
          <FooterLink href="/">Footer Link</FooterLink>
          <FooterLink href="/">Footer Link</FooterLink>
          <FooterLink href="/">Footer Link</FooterLink>
          <FooterLink onClick={() => setIsOpen(true)}>
            Paramètres d’affichage
          </FooterLink>
          <FooterCopy>licence etalab-2.0</FooterCopy>
        </FooterBottom>
      </Footer>
      <SwitchTheme isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default FooterExample;

import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>Sobre mim</h1>
    <p>Este é meu site pessoal</p>
    <Link to="/">&larr; voltar</Link>
  </Layout>
);

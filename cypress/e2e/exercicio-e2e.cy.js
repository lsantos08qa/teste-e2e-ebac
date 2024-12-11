/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import produtosPage from '../support/page-objects/produtos.page';

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.login('aluno_ebac@teste.com', 'teste@teste.com')
        cy.visit('produtos')
        cy.get('.page-title').should('contain', 'Produtos')
    });

    it('Deve selecionar produtos e concluir pedido', () => {
        let qtd = 2
        produtosPage.buscarProdutoLista('Aero Daily Fitness Tee')
        produtosPage.addProdutoCarrinho('L', 'Black', qtd)
        produtosPage.visitarProduto('Aether Gym Pant')
        produtosPage.addProdutoCarrinho('36', 'Brown', qtd)
        produtosPage.buscarProduto('Atlas Fitness Tank')
        produtosPage.addProdutoCarrinho('M', 'Blue', qtd)
        cy.concluirPedido();
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });
})
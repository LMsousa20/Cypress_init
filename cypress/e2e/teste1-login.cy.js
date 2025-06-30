describe('TESTE LOGIN', () => {
  
  it('deve fazer login antes do teste', () => {
    cy.login(); // Usa credenciais padrão (admin/admin)
    // ou cy.login('outroUsuario', 'outraSenha');
    
    // Restante do seu teste aqui
  });

})




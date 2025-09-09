document.addEventListener("DOMContentLoaded", function() {
    // Funcionalidade do Menu Hamburger
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // Fecha o menu ao clicar em um link
        navLinks.forEach(link => link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }));
    }

    // Efeito de sombra no header ao rolar a página
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.backgroundColor = '#fff';
                header.style.boxShadow = 'none';
            }
        });
    }

    // Validação do Formulário de Contato (apenas se existir na página)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o envio padrão do formulário

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Validação simples
            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            // Simulação de envio
            alert(`Obrigado pelo seu contato, ${name}! Sua mensagem foi enviada.`);
            
            // Limpa o formulário após o "envio"
            contactForm.reset();
        });
    }

    // ===================================
    // FUNCIONALIDADES ESPECÍFICAS DA PÁGINA DE CURSOS
    // ===================================
    
    // Filtros de cursos
    const filterButtons = document.querySelectorAll('.filtro-btn');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove a classe active de todos os botões
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Adiciona a classe active ao botão clicado
                button.classList.add('active');
                
                // Aqui você implementaria a lógica de filtragem real
                // Por enquanto é apenas visual
                console.log('Filtrando por: ' + button.textContent);
                
                // Simulação de filtragem (apenas para demonstração)
                const cursos = document.querySelectorAll('.curso-item');
                const filtro = button.textContent.toLowerCase();
                
                cursos.forEach(curso => {
                    if (filtro === 'todos') {
                        curso.style.display = 'flex';
                    } else {
                        const tag = curso.querySelector('.curso-tag').textContent.toLowerCase();
                        if (tag.includes(filtro)) {
                            curso.style.display = 'flex';
                        } else {
                            curso.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
    
    // Paginação
    const paginationButtons = document.querySelectorAll('.pagination-btn');
    if (paginationButtons.length > 0) {
        paginationButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove a classe active de todos os botões de paginação
                paginationButtons.forEach(btn => btn.classList.remove('active'));
                
                // Adiciona a classe active ao botão clicado
                button.classList.add('active');
                
                // Aqui você implementaria a lógica de paginação real
                console.log('Indo para a página: ' + button.textContent);
            });
        });
    }
    
    // Busca de cursos
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-btn');
    
    if (searchInput && searchButton) {
        searchButton.addEventListener('click', () => {
            performSearch();
        });
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        function performSearch() {
            const searchTerm = searchInput.value.trim().toLowerCase();
            if (searchTerm.length > 0) {
                console.log('Buscando por: ' + searchTerm);
                
                // Simulação de busca (apenas para demonstração)
                const cursos = document.querySelectorAll('.curso-item');
                let encontrados = 0;
                
                cursos.forEach(curso => {
                    const titulo = curso.querySelector('.curso-title').textContent.toLowerCase();
                    const descricao = curso.querySelector('.curso-description').textContent.toLowerCase();
                    
                    if (titulo.includes(searchTerm) || descricao.includes(searchTerm)) {
                        curso.style.display = 'flex';
                        encontrados++;
                    } else {
                        curso.style.display = 'none';
                    }
                });
                
                // Mostra mensagem se nenhum curso for encontrado
                if (encontrados === 0) {
                    alert('Nenhum curso encontrado com o termo: ' + searchTerm);
                }
            } else {
                // Se a busca estiver vazia, mostra todos os cursos
                const cursos = document.querySelectorAll('.curso-item');
                cursos.forEach(curso => {
                    curso.style.display = 'flex';
                });
            }
        }
    }

    // Destacar item ativo no menu de navegação
    const currentPage = window.location.pathname.split('/').pop();
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
});
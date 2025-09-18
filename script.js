// Data
const tasks = [
    // Administration & Gestion
    { id: 'admin-1', name: 'Rédaction devis/factures', category: 'Administration & Gestion', baseTimeMin: 1.5, baseTimeMax: 4, multiplier: '0.6 + 0.4 * (n / 10)', automationPercentage: 75 },
    { id: 'admin-2', name: 'Relances paiement clients', category: 'Administration & Gestion', baseTimeMin: 1, baseTimeMax: 2, multiplier: '0.7 + 0.3 * (n / 10)', automationPercentage: 80 },
    { id: 'admin-3', name: 'Notes de frais', category: 'Administration & Gestion', baseTimeMin: 0.5, baseTimeMax: 1.5, multiplier: '0.5 + 0.5 * (n / 10)', automationPercentage: 85 },
    { id: 'admin-4', name: 'Classement/OCR documents', category: 'Administration & Gestion', baseTimeMin: 1, baseTimeMax: 3, multiplier: '1 + 0.2 * (n / 10)', automationPercentage: 90 },
    { id: 'admin-5', name: 'Rédaction courriers/emails', category: 'Administration & Gestion', baseTimeMin: 1, baseTimeMax: 2.5, multiplier: '0.8 + 0.3 * (n / 10)', automationPercentage: 70 },
    { id: 'admin-6', name: 'Synthèse de réunions', category: 'Administration & Gestion', baseTimeMin: 0.5, baseTimeMax: 1, multiplier: '1 + 0.2 * (n / 10)', automationPercentage: 85 },
    { id: 'admin-7', name: 'Rappels d\'échéances', category: 'Administration & Gestion', baseTimeMin: 0.5, baseTimeMax: 1, multiplier: '1', automationPercentage: 90 },

    // Communication & Marketing
    { id: 'comm-1', name: 'Création contenu réseaux sociaux', category: 'Communication & Marketing', baseTimeMin: 2, baseTimeMax: 5, multiplier: '1 + 0.3 * (n / 10)', automationPercentage: 60 },
    { id: 'comm-2', name: 'Rédaction newsletters/articles', category: 'Communication & Marketing', baseTimeMin: 2, baseTimeMax: 6, multiplier: '1 + 0.3 * (n / 10)', automationPercentage: 65 },
    { id: 'comm-3', name: 'Traductions automatiques', category: 'Communication & Marketing', baseTimeMin: 1, baseTimeMax: 3, multiplier: '0.7 + 0.3 * (n / 10)', automationPercentage: 95 },
    { id: 'comm-4', name: 'Génération visuels', category: 'Communication & Marketing', baseTimeMin: 1, baseTimeMax: 2.5, multiplier: '1 + 0.2 * (n / 10)', automationPercentage: 70 },
    { id: 'comm-5', name: 'Réponse aux messages', category: 'Communication & Marketing', baseTimeMin: 1, baseTimeMax: 3, multiplier: '1 + 0.5 * (n / 10)', automationPercentage: 50 },
    { id: 'comm-6', name: 'Analyse sémantique', category: 'Communication & Marketing', baseTimeMin: 0.5, baseTimeMax: 1.5, multiplier: '1', automationPercentage: 85 },

    // Comptabilité & Finance
    { id: 'finance-1', name: 'Rapprochement bancaire', category: 'Comptabilité & Finance', baseTimeMin: 0.5, baseTimeMax: 1.5, multiplier: '1', automationPercentage: 90 },
    { id: 'finance-2', name: 'Prévision de trésorerie', category: 'Comptabilité & Finance', baseTimeMin: 1, baseTimeMax: 3, multiplier: '1', automationPercentage: 80 },
    { id: 'finance-3', name: 'Lecture auto des écritures', category: 'Comptabilité & Finance', baseTimeMin: 1, baseTimeMax: 2, multiplier: '0.8 + 0.3 * (n / 10)', automationPercentage: 95 },
    { id: 'finance-4', name: 'Déclarations automatiques', category: 'Comptabilité & Finance', baseTimeMin: 1, baseTimeMax: 2.5, multiplier: '1', automationPercentage: 85 },
    { id: 'finance-5', name: 'Tableaux de bord IA', category: 'Comptabilité & Finance', baseTimeMin: 0.5, baseTimeMax: 2, multiplier: '1 + 0.2 * (n / 10)', automationPercentage: 90 },

    // Ressources Humaines
    { id: 'rh-1', name: 'Rédaction offres d\'emploi', category: 'Ressources Humaines', baseTimeMin: 1, baseTimeMax: 2, multiplier: '0.5 + 0.5 * (n / 10)', automationPercentage: 70 },
    { id: 'rh-2', name: 'Tri de CV', category: 'Ressources Humaines', baseTimeMin: 2, baseTimeMax: 4, multiplier: '0.4 + 0.6 * (n / 10)', automationPercentage: 80 },
    { id: 'rh-3', name: 'Préparation contrats', category: 'Ressources Humaines', baseTimeMin: 1, baseTimeMax: 2, multiplier: '0.5 + 0.5 * (n / 10)', automationPercentage: 75 },
    { id: 'rh-4', name: 'Suivi congés & absences', category: 'Ressources Humaines', baseTimeMin: 0.5, baseTimeMax: 1.5, multiplier: '0.5 + 0.5 * (n / 10)', automationPercentage: 85 },
    { id: 'rh-5', name: 'Réponses FAQ internes', category: 'Ressources Humaines', baseTimeMin: 0.5, baseTimeMax: 1, multiplier: '1 + 0.2 * (n / 10)', automationPercentage: 80 },
    { id: 'rh-6', name: 'Onboarding automatisé', category: 'Ressources Humaines', baseTimeMin: 1, baseTimeMax: 2, multiplier: '0.5 + 0.5 * (n / 10)', automationPercentage: 75 },

    // Relation Client
    { id: 'client-1', name: 'Réponses automatisées FAQ', category: 'Relation Client', baseTimeMin: 1, baseTimeMax: 2, multiplier: '1 + 0.2 * (n / 10)', automationPercentage: 85 },
    { id: 'client-2', name: 'Chatbots 24/7', category: 'Relation Client', baseTimeMin: 1.5, baseTimeMax: 3, multiplier: '0.8 + 0.4 * (n / 10)', automationPercentage: 90 },
    { id: 'client-3', name: 'Synthèse retours clients', category: 'Relation Client', baseTimeMin: 1, baseTimeMax: 2, multiplier: '1', automationPercentage: 80 },
    { id: 'client-4', name: 'Relances commerciales', category: 'Relation Client', baseTimeMin: 1, baseTimeMax: 2, multiplier: '1 + 0.3 * (n / 10)', automationPercentage: 70 },
    { id: 'client-5', name: 'Sondages IA', category: 'Relation Client', baseTimeMin: 0.5, baseTimeMax: 1, multiplier: '1', automationPercentage: 85 },

    // Production / Métier
    { id: 'prod-1', name: 'Génération procédures', category: 'Production / Métier', baseTimeMin: 1, baseTimeMax: 2.5, multiplier: '1', automationPercentage: 75 },
    { id: 'prod-2', name: 'Traduction docs internes', category: 'Production / Métier', baseTimeMin: 0.5, baseTimeMax: 1.5, multiplier: '1', automationPercentage: 90 },
    { id: 'prod-3', name: 'Aide au diagnostic / support', category: 'Production / Métier', baseTimeMin: 1, baseTimeMax: 2.5, multiplier: '1 + 0.3 * (n / 10)', automationPercentage: 65 },
    { id: 'prod-4', name: 'Suivi tickets / projets', category: 'Production / Métier', baseTimeMin: 1, baseTimeMax: 3, multiplier: '1 + 0.2 * (n / 10)', automationPercentage: 70 },
    { id: 'prod-5', name: 'Agenda intelligent', category: 'Production / Métier', baseTimeMin: 0.5, baseTimeMax: 1.5, multiplier: '0.5 + 0.5 * (n / 10)', automationPercentage: 80 },

    // Analyse & Pilotage
    { id: 'analyse-1', name: 'Analyse KPI IA', category: 'Analyse & Pilotage', baseTimeMin: 1, baseTimeMax: 2, multiplier: '1', automationPercentage: 85 },
    { id: 'analyse-2', name: 'Rapports automatiques', category: 'Analyse & Pilotage', baseTimeMin: 1, baseTimeMax: 2.5, multiplier: '1', automationPercentage: 90 },
    { id: 'analyse-3', name: 'Recommandations stratégiques IA', category: 'Analyse & Pilotage', baseTimeMin: 1, baseTimeMax: 3, multiplier: '1', automationPercentage: 75 },
    { id: 'analyse-4', name: 'Veille IA', category: 'Analyse & Pilotage', baseTimeMin: 0.5, baseTimeMax: 1.5, multiplier: '1', automationPercentage: 80 },
    { id: 'analyse-5', name: 'Prévision ventes/stocks', category: 'Analyse & Pilotage', baseTimeMin: 1, baseTimeMax: 2.5, multiplier: '1', automationPercentage: 85 },

    // Formation
    { id: 'form-1', name: 'Parcours formation IA', category: 'Formation', baseTimeMin: 1, baseTimeMax: 2, multiplier: '0.5 + 0.5 * (n / 10)', automationPercentage: 70 },
    { id: 'form-2', name: 'Génération quiz/supports', category: 'Formation', baseTimeMin: 0.5, baseTimeMax: 1.5, multiplier: '1', automationPercentage: 85 },
    { id: 'form-3', name: 'Traduction / simplification supports', category: 'Formation', baseTimeMin: 0.5, baseTimeMax: 1, multiplier: '1', automationPercentage: 90 },
    { id: 'form-4', name: 'Coaching IA', category: 'Formation', baseTimeMin: 1, baseTimeMax: 2, multiplier: '0.5 + 0.5 * (n / 10)', automationPercentage: 60 }
];

const taskCategories = [
    'Administration & Gestion',
    'Communication & Marketing',
    'Comptabilité & Finance',
    'Ressources Humaines',
    'Relation Client',
    'Production / Métier',
    'Analyse & Pilotage',
    'Formation'
];

// State
let currentStep = 0;
let company = {
    sector: '',
    employees: 1,
    hourlyRate: 25,
    selectedTasks: [],
    timeSpent: {}
};

let selectedCategory = null;
let charts = {};

// Utility Functions
function calculateMultiplier(multiplierFormula, employees) {
    const n = employees;
    if (multiplierFormula === '1') return 1;
    
    try {
        const formula = multiplierFormula.replace(/n/g, n.toString()).replace(/\*/g, '*');
        return eval(formula);
    } catch (error) {
        console.error('Error evaluating multiplier formula:', error);
        return 1;
    }
}

function calculateTaskTime(task, employees, userTimeSpent) {
    const multiplier = calculateMultiplier(task.multiplier, employees);
    const avgBaseTime = (task.baseTimeMin + task.baseTimeMax) / 2;
    const adjustedTime = avgBaseTime * multiplier;
    
    return userTimeSpent > 0 ? userTimeSpent : adjustedTime;
}

function calculateTimeSaved(task, timeSpent) {
    return timeSpent * (task.automationPercentage / 100);
}

function calculateResults(company) {
    const selectedTasks = tasks.filter(task => company.selectedTasks.includes(task.id));
    
    let totalTimeSpent = 0;
    let totalTimeSaved = 0;
    const tasksByCategory = {};

    selectedTasks.forEach(task => {
        const timeSpent = calculateTaskTime(task, company.employees, company.timeSpent[task.id] || 0);
        const timeSaved = calculateTimeSaved(task, timeSpent);
        
        totalTimeSpent += timeSpent;
        totalTimeSaved += timeSaved;
        
        if (!tasksByCategory[task.category]) {
            tasksByCategory[task.category] = {
                tasks: [],
                timeSpent: 0,
                timeSaved: 0,
                savings: 0
            };
        }
        
        tasksByCategory[task.category].tasks.push(task);
        tasksByCategory[task.category].timeSpent += timeSpent;
        tasksByCategory[task.category].timeSaved += timeSaved;
        tasksByCategory[task.category].savings += timeSaved * company.hourlyRate;
    });

    const weeklySavings = totalTimeSaved * company.hourlyRate;
    const monthlySavings = weeklySavings * 4.33;
    const annualSavings = monthlySavings * 12;
    
    const estimatedImplementationCost = 5000;
    const roi = (annualSavings - estimatedImplementationCost) / estimatedImplementationCost * 100;

    return {
        totalTimeSpent,
        totalTimeSaved,
        monthlySavings,
        annualSavings,
        roi,
        tasksByCategory
    };
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

function formatTime(hours) {
    return `${hours.toFixed(1)}h`;
}

// Step Navigation
function nextStep() {
    if (currentStep < 2) {
        currentStep++;
        updateStepIndicator();
        showStep(currentStep);
        
        if (currentStep === 2) {
            showResults();
        }
    }
}

function previousStep() {
    if (currentStep > 0) {
        currentStep--;
        updateStepIndicator();
        showStep(currentStep);
    }
}

function showStep(step) {
    document.querySelectorAll('.step-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`step${step}`).classList.add('active');
}

function updateStepIndicator() {
    document.querySelectorAll('.step').forEach((step, index) => {
        step.classList.remove('active', 'completed');
        if (index < currentStep) {
            step.classList.add('completed');
        } else if (index === currentStep) {
            step.classList.add('active');
        }
    });
}

// Company Form
document.getElementById('companyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    company.sector = document.getElementById('sector').value;
    company.employees = parseInt(document.getElementById('employees').value);
    company.hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
    
    if (!company.sector || company.employees < 1 || company.employees > 10 || company.hourlyRate < 10 || company.hourlyRate > 200) {
        alert('Veuillez remplir tous les champs correctement');
        return;
    }
    
    initializeTaskSelector();
    nextStep();
});

// Task Selector
function initializeTaskSelector() {
    const categoryList = document.getElementById('categoryList');
    categoryList.innerHTML = '';
    
    taskCategories.forEach(category => {
        const categoryItem = document.createElement('button');
        categoryItem.className = 'category-item';
        categoryItem.innerHTML = `
            <span>${category}</span>
            <span class="category-count">0</span>
        `;
        categoryItem.addEventListener('click', () => selectCategory(category));
        categoryList.appendChild(categoryItem);
    });
    
    updateTaskCounts();
}

function selectCategory(category) {
    selectedCategory = category;
    
    // Update category buttons
    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.remove('active');
        if (item.textContent.includes(category)) {
            item.classList.add('active');
        }
    });
    
    // Show tasks for this category
    showTasksForCategory(category);
}

function showTasksForCategory(category) {
    const taskList = document.getElementById('taskList');
    const categoryTasks = tasks.filter(task => task.category === category);
    
    taskList.innerHTML = '';
    
    categoryTasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.className = `task-item ${company.selectedTasks.includes(task.id) ? 'selected' : ''}`;
        taskItem.innerHTML = `
            <div class="task-header">
                <div class="task-info">
                    <div class="task-checkbox">
                        ${company.selectedTasks.includes(task.id) ? '✓' : ''}
                    </div>
                    <div class="task-details">
                        <h4>${task.name}</h4>
                        <div class="task-time">${task.baseTimeMin}h - ${task.baseTimeMax}h par semaine</div>
                        <div class="task-automation">${task.automationPercentage}% automatisable</div>
                    </div>
                </div>
                ${company.selectedTasks.includes(task.id) ? `
                    <div class="task-input">
                        ⏰ <input type="number" min="0" max="40" step="0.5" value="${company.timeSpent[task.id] || ''}" placeholder="h/sem">
                    </div>
                ` : ''}
            </div>
        `;
        
        taskItem.addEventListener('click', (e) => {
            if (e.target.type !== 'number') {
                toggleTask(task.id);
            }
        });
        
        const input = taskItem.querySelector('input');
        if (input) {
            input.addEventListener('change', (e) => {
                company.timeSpent[task.id] = parseFloat(e.target.value) || 0;
            });
        }
        
        taskList.appendChild(taskItem);
    });
}

function toggleTask(taskId) {
    if (company.selectedTasks.includes(taskId)) {
        company.selectedTasks = company.selectedTasks.filter(id => id !== taskId);
        delete company.timeSpent[taskId];
    } else {
        company.selectedTasks.push(taskId);
    }
    
    updateTaskCounts();
    updateNextButton();
    
    if (selectedCategory) {
        showTasksForCategory(selectedCategory);
    }
}

function updateTaskCounts() {
    document.querySelectorAll('.category-item').forEach(item => {
        const categoryName = item.querySelector('span').textContent;
        const count = tasks.filter(task => 
            task.category === categoryName && company.selectedTasks.includes(task.id)
        ).length;
        item.querySelector('.category-count').textContent = count;
    });
}

function updateNextButton() {
    const nextButton = document.getElementById('nextToResults');
    nextButton.disabled = company.selectedTasks.length === 0;
}

// Results
function showResults() {
    const results = calculateResults(company);
    
    // Update company profile
    document.getElementById('companyProfile').textContent = 
        `Analyse personnalisée pour ${company.sector} • ${company.employees} employé(s)`;
    
    // Show KPIs
    showKPIs(results);
    
    // Show Charts
    showCharts(results);
}

function showKPIs(results) {
    const kpiGrid = document.getElementById('kpiGrid');
    
    const kpis = [
        {
            title: 'Temps économisé',
            value: formatTime(results.totalTimeSaved),
            subtitle: 'par semaine',
            icon: '⏰',
            color: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
            change: `${(results.totalTimeSaved / results.totalTimeSpent * 100).toFixed(1)}%`
        },
        {
            title: 'Économies mensuelles',
            value: formatCurrency(results.monthlySavings),
            subtitle: 'gain financier',
            icon: '💰',
            color: 'linear-gradient(135deg, #10b981, #059669)',
            change: `${formatCurrency(results.annualSavings)} / an`
        },
        {
            title: 'Retour sur investissement',
            value: `${results.roi.toFixed(1)}%`,
            subtitle: 'ROI première année',
            icon: '📈',
            color: 'linear-gradient(135deg, #ec4899, #be185d)',
            change: results.roi > 0 ? 'Rentable' : 'À étudier'
        },
        {
            title: 'Tâches analysées',
            value: company.selectedTasks.length.toString(),
            subtitle: 'processus étudiés',
            icon: '🎯',
            color: 'linear-gradient(135deg, #f59e0b, #d97706)',
            change: 'Sélectionnées'
        }
    ];
    
    kpiGrid.innerHTML = '';
    
    kpis.forEach(kpi => {
        const kpiCard = document.createElement('div');
        kpiCard.className = 'kpi-card';
        kpiCard.innerHTML = `
            <div class="kpi-header">
                <div class="kpi-icon" style="background: ${kpi.color}">
                    ${kpi.icon}
                </div>
                <div class="kpi-change">${kpi.change}</div>
            </div>
            <div class="kpi-value">${kpi.value}</div>
            <div class="kpi-title">${kpi.title}</div>
            <div class="kpi-subtitle">${kpi.subtitle}</div>
        `;
        kpiGrid.appendChild(kpiCard);
    });
}

function showCharts(results) {
    // Time Comparison Chart
    const timeCtx = document.getElementById('timeChart').getContext('2d');
    if (charts.timeChart) charts.timeChart.destroy();
    charts.timeChart = new Chart(timeCtx, {
        type: 'bar',
        data: {
            labels: ['Temps actuel', 'Temps optimisé', 'Temps économisé'],
            datasets: [{
                data: [
                    results.totalTimeSpent,
                    results.totalTimeSpent - results.totalTimeSaved,
                    results.totalTimeSaved
                ],
                backgroundColor: ['#ef4444', '#10b981', '#3b82f6'],
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Heures/semaine'
                    }
                }
            }
        }
    });
    
    // Savings Breakdown Chart
    const savingsCtx = document.getElementById('savingsChart').getContext('2d');
    if (charts.savingsChart) charts.savingsChart.destroy();
    
    const savingsData = Object.entries(results.tasksByCategory).map(([category, data]) => ({
        label: category,
        value: data.savings
    }));
    
    charts.savingsChart = new Chart(savingsCtx, {
        type: 'doughnut',
        data: {
            labels: savingsData.map(d => d.label),
            datasets: [{
                data: savingsData.map(d => d.value),
                backgroundColor: [
                    '#3b82f6', '#10b981', '#f59e0b', '#ef4444',
                    '#8b5cf6', '#06b6d4', '#ec4899', '#84cc16'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
    
    // ROI Projection Chart
    const roiCtx = document.getElementById('roiChart').getContext('2d');
    if (charts.roiChart) charts.roiChart.destroy();
    
    const implementationCost = 5000;
    const monthlySavings = results.monthlySavings;
    
    const roiData = Array.from({ length: 12 }, (_, i) => {
        const month = i + 1;
        const cumulativeSavings = monthlySavings * month;
        const roi = ((cumulativeSavings - implementationCost) / implementationCost) * 100;
        return Math.round(roi);
    });
    
    charts.roiChart = new Chart(roiCtx, {
        type: 'line',
        data: {
            labels: Array.from({ length: 12 }, (_, i) => `M${i + 1}`),
            datasets: [{
                label: 'ROI (%)',
                data: roiData,
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'ROI (%)'
                    }
                }
            }
        }
    });
    
    // Category Radar Chart
    const radarCtx = document.getElementById('radarChart').getContext('2d');
    if (charts.radarChart) charts.radarChart.destroy();
    
    const radarData = Object.entries(results.tasksByCategory).map(([category, data]) => ({
        category: category.split(' ')[0],
        timeSaved: data.timeSaved
    }));
    
    charts.radarChart = new Chart(radarCtx, {
        type: 'radar',
        data: {
            labels: radarData.map(d => d.category),
            datasets: [{
                label: 'Temps économisé (h)',
                data: radarData.map(d => d.timeSaved),
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.3)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Contact Form and PDF Export
function showContactForm() {
    document.getElementById('contactModal').classList.add('active');
}

function hideContactForm() {
    document.getElementById('contactModal').classList.remove('active');
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const companyName = document.getElementById('companyName').value;
    const email = document.getElementById('email').value;
    
    if (!firstName || !lastName || !companyName || !email) {
        alert('Veuillez remplir tous les champs');
        return;
    }
    
    // Sauvegarder les données de contact pour l'affichage
    saveContactInfo({ firstName, lastName, companyName, email });
    
    // Envoyer les données à Google Sheets
    sendToGoogleSheets({ firstName, lastName, companyName, email });
    
    // Fermer le modal
    hideContactForm();
    
    // Déclencher l'impression après un court délai pour permettre la mise à jour de l'affichage
    setTimeout(() => {
        window.print();
    }, 500);
});

// Fonction pour sauvegarder et afficher les informations de contact
function saveContactInfo(contactInfo) {
    // Ajouter les informations de contact à l'affichage des résultats
    const companyProfile = document.getElementById('companyProfile');
    companyProfile.innerHTML = `
        <div style="margin-bottom: 1rem;">
            <strong>${contactInfo.companyName}</strong><br>
            Contact: ${contactInfo.firstName} ${contactInfo.lastName}<br>
            Email: ${contactInfo.email}
        </div>
        <div>
            Analyse personnalisée pour ${company.sector} • ${company.employees} employé(s) • ${company.hourlyRate}€/h
        </div>
    `;
}

// Fonction pour envoyer les données à Google Sheets
async function sendToGoogleSheets(contactInfo) {
    const results = calculateResults(company);
    const selectedTasks = tasks.filter(t => company.selectedTasks.includes(t.id));
    
    // Formatage des tâches pour Google Sheets
    const tasksText = selectedTasks.map(t => t.name).join(', ');
    const timesText = selectedTasks.map(t => {
        const timeSpent = company.timeSpent[t.id] || calculateTaskTime(t, company.employees, 0);
        return `${t.name}: ${timeSpent}h`;
    }).join(' | ');
    
    const payload = {
        firstName: contactInfo.firstName,
        lastName: contactInfo.lastName,
        company: contactInfo.companyName,
        email: contactInfo.email,
        sector: company.sector,
        employees: company.employees,
        hourlyRate: company.hourlyRate,
        tasks: tasksText,
        timeSpent: timesText,
        totalTimeSaved: results.totalTimeSaved.toFixed(1),
        monthlySavings: results.monthlySavings.toFixed(0),
        annualSavings: results.annualSavings.toFixed(0),
        roi: results.roi.toFixed(1),
        timestamp: new Date().toISOString(),
        driveUrl: 'Impression navigateur'
    };
    
    console.log('Payload envoyé:', payload); // Pour debug
    
    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbx0i-X3MVQMKDfnWR3fi5k-RZdrTynEUgBnZNOlkuu0_-m9WybuqUFWaMeR4pXi22B74Q/exec', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
            mode: 'no-cors'
        });
        
        console.log('Données envoyées avec succès à Google Sheets');
        
    } catch (error) {
        console.error('Erreur lors de l\'envoi à Google Sheets:', error);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    showStep(0);
    updateStepIndicator();
});
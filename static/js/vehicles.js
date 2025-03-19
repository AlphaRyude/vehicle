document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedPrice = parseInt(priceRange.value);

        vehicleCards.forEach(card => {
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price.replace(/,/g, ''));
            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const priceMatch = !selectedPrice || cardPrice <= selectedPrice;

            if (typeMatch && priceMatch) {
                card.style.display = '';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initial filter
    filterVehicles();
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    // Update price display
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `$${Number(value).toLocaleString()}`;
        filterVehicles();
    });

    // Filter buttons click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedType = document.querySelector('.filter-btn.active
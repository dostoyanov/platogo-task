export default function OffersComponent(containerId, offers) {
  const container = document.getElementById(containerId);

  offers.forEach(offer => {
    const offerRow = document.createElement('div');
    offerRow.classList.add('offer-row');
    if (offer.limited_time) offerRow.classList.add('offer-row--limited-time');

    offerRow.innerHTML = `
      <span class="promotion-value">${offer.promotion_value}</span>
      ${offer.limited_time ? `<span class="limited-time">${offer.limited_time}</span>` : ''}
      <div class="coins-container">
        <div class="coins ${offer.coins_class}"></div>
        <span class="regular-coins">${offer.regular_coins}</span>
        <span class="promotion-coins">${offer.promotion_coins}</span>
      </div>
      <span class="ticket-value">${offer.ticket_value}</span>
      <div class="price-btn">
        <div class="btn-text">${offer.price}</div>
      </div>
    `;
    container.appendChild(offerRow);
  });
}
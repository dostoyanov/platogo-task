export default function OffersComponent(containerId, promotions) {
  const container = document.getElementById(containerId);

  promotions.forEach(promotion => {

    const promotionRow = document.createElement('div');
    promotionRow.classList.add('offer-row');
    if (promotion.limited_time) promotionRow.classList.add('offer-row--limited-time');

    promotionRow.innerHTML = `
      <span class="promotion-value">${promotion.promotion_value}</span>
      ${promotion.limited_time ? `<span class="limited-time">${promotion.limited_time}</span>` : ''}
      <div class="coins-container">
        <div class="coins ${promotion.coins_class}"></div>
        <span class="regular-coins">${promotion.regular_coins}</span>
        <span class="promotion-coins">${promotion.promotion_coins}</span>
      </div>
      <span class="ticket-value">${promotion.ticket_value}</span>
      <div class="price-btn">
        <div class="btn-text">${promotion.price}</div>
      </div>
    `;
    container.appendChild(promotionRow);
  });
}
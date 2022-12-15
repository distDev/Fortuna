'use strict';

/**
 * custom-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::custom-product.custom-product');

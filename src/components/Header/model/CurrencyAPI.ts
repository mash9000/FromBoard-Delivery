import axios from 'axios';
import {
    CurrencyCodesAndSymbols
} from "./CurrencyCodesAndSymbols.ts";

const API_BASE_URL = 'https://open.er-api.com/v6/latest/';


export const fetchExchangeRate = async (currency: string): Promise<number> => {
    if(!CurrencyCodesAndSymbols.checkCurrencyForComplianceWithISO(currency))
        throw new Error(`Currency "${currency}" not found!`);

    try {
        const response = await axios.get(`${API_BASE_URL}${currency}`);
        return response.data.rates.RUB;
    } catch (error) {
        console.error(`Ошибка при получении курса для ${currency}:`, error);
        throw new Error('Не удалось загрузить курс валюты');
    }
};
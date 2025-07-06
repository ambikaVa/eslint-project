function getPayments()
{
    return 1;
}

getPayments(); // we need to tell this method is deprecated. Use getLatestPayment instead

function getLatestPayment()
{
    return 'Latest Payment';
}

getLatestPayment();
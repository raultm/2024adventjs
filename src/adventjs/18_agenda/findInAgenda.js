export const findInAgenda = (agenda, phone) => {
    const lines = agenda.split('\n');

    const results = lines.map(line => {
        const phoneMatch = line.match(/\+\d{1,3}-\d{3}-\d{3}-\d{3}/)
        const phone = phoneMatch ? phoneMatch[0] : null

        const nameMatch = line.match(/<([^>]+)>/)
        const name = nameMatch ? nameMatch[1] : null

        const address = line
            .replace(/\+\d{1,3}-\d{3}-\d{3}-\d{3}/, '')
            .replace(/<[^>]+>/, '')
            .trim()

        return { phone, name, address }
    });

    const coincidences = results.filter( agendaItem => agendaItem.phone.includes(phone))
    if (coincidences.length === 1) {
        const { name, address } = coincidences[0];
        return { name, address }
    }
    return null

}
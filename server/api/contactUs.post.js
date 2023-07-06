export default defineEventHandler(async (event) => {
    const { data } = await readBody(event);
    return `Contacts has been received correctly!`;
});
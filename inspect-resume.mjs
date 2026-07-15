import mammoth from 'mammoth';

const result = await mammoth.extractRawText({ path: 'data/Castos-CV-bc959b.docx' });
console.log(result.value);

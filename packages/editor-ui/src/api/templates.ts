import { IN8nTemplate } from '@/Interface';
import { get} from './helpers';
import { TEMPLATES_BASE_URL } from '@/constants';

export async function getTemplateById(templateId: string): Promise<IN8nTemplate> {
	return await get(TEMPLATES_BASE_URL, `/workflow/${templateId}`);
}
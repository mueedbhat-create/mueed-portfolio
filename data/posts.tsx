import type { BlogPost } from "./blog/types";
import { post as p_ai_marketing_automation_guide_2026 } from "./blog/ai-marketing-automation-guide-2026";
import { post as p_performance_marketing_metrics_ctr_cpa_roas_2026 } from "./blog/performance-marketing-metrics-ctr-cpa-roas-2026";
import { post as p_n8n_ai_lead_qualification_workflow_2026 } from "./blog/n8n-ai-lead-qualification-workflow-2026";
import { post as p_ai_voice_agents_lead_follow_up_2026 } from "./blog/ai-voice-agents-lead-follow-up-2026";
import { post as p_brand_voice_guide_ai_can_follow_2026 } from "./blog/brand-voice-guide-ai-can-follow-2026";
import { post as p_ab_testing_ai_ad_copy_sample_size_2026 } from "./blog/ab-testing-ai-ad-copy-sample-size-2026";
import { post as p_n8n_vs_zapier_vs_make_marketing } from "./blog/n8n-vs-zapier-vs-make-marketing";
import { post as p_ai_copywriting_where_it_works_2026 } from "./blog/ai-copywriting-where-it-works-2026";
import { post as p_optimize_website_for_ai_search_geo_2026 } from "./blog/optimize-website-for-ai-search-geo-2026";
import { post as p_what_is_ai_automation_performance_marketing } from "./blog/what-is-ai-automation-performance-marketing";
import { post as p_rag_for_marketing_2026 } from "./blog/rag-for-marketing-2026";
import { post as p_ai_agents_vs_workflows_marketing } from "./blog/ai-agents-vs-workflows-marketing";
import { post as p_ai_editorial_engine_revision_cycles_2026 } from "./blog/ai-editorial-engine-revision-cycles-2026";
import { post as p_openai_api_vs_n8n_ai_nodes_2026 } from "./blog/openai-api-vs-n8n-ai-nodes-2026";
import { post as p_audit_marketing_workflow_ai_automation_2026 } from "./blog/audit-marketing-workflow-ai-automation-2026";
import { post as p_n8n_beginners_first_ai_automation_30_minutes_2026 } from "./blog/n8n-beginners-first-ai-automation-30-minutes-2026";
import { post as p_5_marketing_tasks_automate_ai_this_week_2026 } from "./blog/5-marketing-tasks-automate-ai-this-week-2026";
import { post as p_how_i_built_daily_job_application_pipeline_ai_2026 } from "./blog/how-i-built-daily-job-application-pipeline-ai-2026";
import { post as p_ai_real_estate_marketing_alif_realty_redesign_2026 } from "./blog/ai-real-estate-marketing-alif-realty-redesign-2026";
import { post as p_review_collection_qr_codes_ai_customer_ratings_2026 } from "./blog/review-collection-qr-codes-ai-customer-ratings-2026";
import { post as p_will_ai_replace_marketers_what_changes_2026 } from "./blog/will-ai-replace-marketers-what-changes-2026";
import { post as p_honest_truth_ai_content_six_months_2026 } from "./blog/honest-truth-ai-content-six-months-2026";

export type { BlogPost };

export const posts: BlogPost[] = [
  p_ai_marketing_automation_guide_2026,
  p_performance_marketing_metrics_ctr_cpa_roas_2026,
  p_n8n_ai_lead_qualification_workflow_2026,
  p_ai_voice_agents_lead_follow_up_2026,
  p_brand_voice_guide_ai_can_follow_2026,
  p_ab_testing_ai_ad_copy_sample_size_2026,
  p_n8n_vs_zapier_vs_make_marketing,
  p_ai_copywriting_where_it_works_2026,
  p_optimize_website_for_ai_search_geo_2026,
  p_what_is_ai_automation_performance_marketing,
  p_rag_for_marketing_2026,
  p_ai_agents_vs_workflows_marketing,
  p_ai_editorial_engine_revision_cycles_2026,
  p_openai_api_vs_n8n_ai_nodes_2026,
  p_audit_marketing_workflow_ai_automation_2026,
  p_n8n_beginners_first_ai_automation_30_minutes_2026,
  p_5_marketing_tasks_automate_ai_this_week_2026,
  p_how_i_built_daily_job_application_pipeline_ai_2026,
  p_ai_real_estate_marketing_alif_realty_redesign_2026,
  p_review_collection_qr_codes_ai_customer_ratings_2026,
  p_will_ai_replace_marketers_what_changes_2026,
  p_honest_truth_ai_content_six_months_2026,
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export const visiblePosts = posts.filter((p) => !p.hidden);

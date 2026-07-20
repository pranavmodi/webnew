#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
filter_file="$repo_root/scripts/hero-intake-queue.ffilter"
output_dir="$repo_root/public/video"

ffmpeg -hide_banner -loglevel error \
  -f lavfi -i "color=c=0x020806:s=1200x900:d=10:r=30" \
  -filter_complex_script "$filter_file" \
  -map "[out]" \
  -c:v libx264 -preset slow -crf 23 -movflags +faststart \
  -y "$output_dir/hero-loop.mp4"

ffmpeg -hide_banner -loglevel error \
  -i "$output_dir/hero-loop.mp4" \
  -vf "scale=800:600:flags=lanczos" \
  -c:v libx264 -preset slow -crf 24 -movflags +faststart \
  -an -y "$output_dir/hero-loop-sm.mp4"

ffmpeg -hide_banner -loglevel error \
  -ss 1 -i "$output_dir/hero-loop.mp4" \
  -frames:v 1 -c:v libwebp -quality 82 \
  -y "$output_dir/hero-loop-poster.webp"

chmod 0644 \
  "$output_dir/hero-loop.mp4" \
  "$output_dir/hero-loop-sm.mp4" \
  "$output_dir/hero-loop-poster.webp"

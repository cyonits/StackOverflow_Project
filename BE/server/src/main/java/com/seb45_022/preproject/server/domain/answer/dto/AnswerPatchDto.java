package com.seb45_022.preproject.server.domain.answer.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor

public class AnswerPatchDto {
    @ApiModelProperty(example = "1", position = 1)
    private long answerId;

    @ApiModelProperty(example = "SampleAnswer", position = 2)
    @NotBlank(message = "답변 내용은 공백이 아니어야 합니다")
    private String body;

    private long memberId;
}

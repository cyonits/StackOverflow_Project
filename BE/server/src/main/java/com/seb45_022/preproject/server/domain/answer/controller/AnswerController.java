package com.seb45_022.preproject.server.domain.answer.controller;

import com.seb45_022.preproject.server.domain.answer.dto.AnswerPatchDto;
import com.seb45_022.preproject.server.domain.answer.dto.AnswerPostDto;
import com.seb45_022.preproject.server.domain.answer.dto.AnswerResponseDto;
import com.seb45_022.preproject.server.domain.answer.entity.Answer;
import com.seb45_022.preproject.server.domain.answer.mapper.AnswerMapper;
import com.seb45_022.preproject.server.domain.answer.service.AnswerService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@CrossOrigin
@RestController
@RequestMapping("/answers")
@Validated
@Slf4j
@Api(tags = {"답변 CRUD API"})
public class AnswerController {
    private final AnswerService answerService;
    private final AnswerMapper mapper;


    public AnswerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }

    // 답변 등록
    @ApiOperation(value = "답변을 등록하는 메서드", notes = "questionId, memberId, body 를 사용해서 답변을 생성한다")
    @ApiResponses({
            @ApiResponse(code = 201, message = "Created", response = AnswerResponseDto.class)
    })
    @ResponseStatus(value = HttpStatus.CREATED)
    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto requestBody) {
        Answer createdAnswer = answerService.createAnswer(mapper.answerPostDtoToAnswer(requestBody));
        AnswerResponseDto response = mapper.answerToResponseDto(createdAnswer);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    // 답변 수정
    @ApiOperation(value = "하나의 답변을 수정하는 메서드", notes = "answerId, body를 사용해 답변을 수정한다")
    @ApiResponses({
            @ApiResponse(code = 200, message = "OK", response = AnswerResponseDto.class),
            @ApiResponse(code = 500, message = "Internal Sever Error"),
            @ApiResponse(code = 404, message = "Not Found"),
    })
    @ResponseStatus(value = HttpStatus.OK)
    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive long answerId,
                                      @Valid @RequestBody AnswerPatchDto requestBody) {
        requestBody.setAnswerId(answerId);
        Answer answer = mapper.answerPatchDtoToAnswer(requestBody);
        AnswerResponseDto response = mapper.answerToResponseDto(answerService.updateAnswer(answer));
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // 답변 삭제
    @ApiOperation(value = "하나의 답변을 삭제하는 메서드", notes = "answerId를 사용해 답변을 삭제한다")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    @ApiResponses({
            @ApiResponse(code = 204, message = "NO CONTENT"),
            @ApiResponse(code = 500, message = "Internal Sever Error"),
            @ApiResponse(code = 404, message = "Not Found"),
    })
    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id")@Positive long answerId) {
        answerService.deleteAnswer(answerId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
